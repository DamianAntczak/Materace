import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Papa, ParseResult} from 'ngx-papaparse';
import {yearsPerRow} from '@angular/material';
import {StepData} from './step-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  csvData: Array<Array<any>> = [];
  questionSet: Set<string>;
  answersMap: Map<string, Array<any>>;
  questionArray: string[];
  mattresses: string[][] = new Array<Array<string>>();
  mattressesPrices: ParseResult;

  matrix: ParseResult;
  stepData: StepData;

  constructor(private http: HttpClient, private papa: Papa) {
  }

  loadData() {
    this.loadMattressesMatrix();

    // const csvData = '"Hello","World!"';

    this.loadMattressesPrices();
    this.loadMattressesQuestion();
  }

  private loadMattressesPrices() {
    this.http.get('assets/materace-ceny.csv', {responseType: 'text'})
      .subscribe(
        data => {
          this.papa.parse(data, {
            complete: (result) => {
              console.log('Materace ceny: ', result);
              this.mattressesPrices = result;
            }
          });
        });
  }

  private loadMattressesQuestion() {
    this.http.get('assets/konfigurator materace - najnowsza wersja.csv', {responseType: 'text'})
      .subscribe(
        data => {
          this.papa.parse(data, {
            complete: (result) => {
              console.log('New Matrix: ', result);
              this.matrix = result;
              this.getQuestionForSteps(1);
            }
          });
        });


  }

  public getQuestionForSteps(stepIndex: number) {
    const answerArray = [];
    let question = '';
    let matrixLength = 0;
    this.matrix.data.forEach((item, rowIndex) => {
      if (rowIndex === 1) {
        question = item[stepIndex];
      } else if (item[stepIndex] !== undefined && item[stepIndex] !== '') {
        answerArray.push({name: item[stepIndex], start: rowIndex, stop: 0});
      }
      matrixLength++;
    });
    answerArray.forEach((item, index) => {
      if (index < answerArray.length - 1) {
        console.log(answerArray[index + 1].start);
        answerArray[index].stop = answerArray[index + 1].start - 1;
      } else {
        answerArray[index].stop = matrixLength - 1;
      }
    });
    const data = {question, answerArray};
    console.log(data);
    this.stepData = data;
  }

  public getQuestionString() {
    if (this.stepData !== undefined) {
      return this.stepData.question;
    }
  }

  private loadMattressesMatrix() {
    this.http.get('assets/konfigurator.csv', {responseType: 'text'})
      .subscribe(
        data => {
          const allTextLines = data.split(/\r\n|\n/);
          const headers = allTextLines[0].split(';');
          const answers = allTextLines[1].split(';');
          const lines = [];

          this.questionSet = new Set(headers);
          this.questionSet.delete('');
          this.questionArray = Array.from(this.questionSet);
          this.csvData = this.loadRawData(allTextLines, headers, lines);

          this.answersMap = new Map<string, Array<any>>();
          this.questionSet.forEach(question => {
            const answersIndex = new Array<number>();
            headers.forEach((header, index) => {
              this.mattresses[index] = new Array<string>();
              if (question === header) {
                answersIndex.push(index);
              }
            });

            const answersPerQuestion = new Array<string>();
            answersIndex.forEach((value, index) => {
              answersPerQuestion[index] = answers[value];
            });
            this.answersMap.set(question, answersPerQuestion);

            console.log(this.mattresses);
            this.csvData.forEach((line, lineIndex) => {
              line.forEach((column, columnIndex) => {
                this.mattresses[columnIndex][lineIndex] = column;
              });
            });

          });
          return this.answersMap;
        },
        error => {
          console.log(error);
          return null;
        }
      );
  }

  private loadRawData(allTextLines: string[], headers: string[], lines: any[]): Array<Array<any>> {
    for (let i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      const data = allTextLines[i].split(';');
      if (data.length == headers.length) {
        const tarr = [];
        for (let j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
    }
    return lines;
  }

  public getQuestionArray() {
    return this.questionArray;
  }

  public getAnswersMap() {
    return this.answersMap;
  }

  public getDataAboutMattress(mattress) {
    var findRow = [];
    this.mattressesPrices.data.forEach(row => {
      console.log(mattress);
      console.log(row[0]);
      console.log(row[0] == mattress);
      if (row[0] == mattress) {
        findRow = row;
      }
    });
    return findRow;
  }
}
