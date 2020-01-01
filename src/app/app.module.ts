import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material';
import {StepComponent} from './step/step.component';
import {QuestionComponent} from './step/question/question.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {StartComponent} from './start/start.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { SummaryComponent } from './summary/summary.component';

const appRoutes: Routes = [
  {path: 'start', component: StartComponent},
  {
    path: 'configurator',
    component: ConfiguratorComponent,
    data: {title: 'Krok'}
  },
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    QuestionComponent,
    StartComponent,
    ConfiguratorComponent,
    HeaderComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
