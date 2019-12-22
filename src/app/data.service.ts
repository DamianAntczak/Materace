import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  csvData: Array<Array<any>> = [];
  questionSet: Set<string>;
  answersMap: Map<string, Array<any>>;
  questionArray: string[];
  mattresses: string[][] = new Array<Array<string>>();


  constructor(private http: HttpClient) {
  }

  loadData() {
    this.http.get('assets/konfigurator.csv', {responseType: 'text'})
      .subscribe(
        data => {
          let allTextLines = data.split(/\r\n|\n/);
          let headers = allTextLines[0].split(';');
          let answers = allTextLines[1].split(';');
          let lines = [];

          this.questionSet = new Set(headers);
          this.questionSet.delete('');
          this.questionArray = Array.from(this.questionSet);
          this.csvData = this.loadRawData(allTextLines, headers, lines);

          this.answersMap = new Map<string, Array<any>>();
          this.questionSet.forEach(question => {
            let answersIndex = new Array<number>();
            headers.forEach((header, index) => {
              this.mattresses[index] = new Array<string>();
              if (question === header) {
                answersIndex.push(index);
              }
            });

            let answersPerQuestion = new Array<string>();
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

  private loadRawData(allTextLines: string[], headers: string[], lines: any[]): Array<Array<any>>{
    for (let i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      let data = allTextLines[i].split(';');
      if (data.length == headers.length) {
        let tarr = [];
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
}
