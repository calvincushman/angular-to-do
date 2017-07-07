import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewTaskComponentComponent } from './new-task-component/new-task-component.component';
import { EditTaskComponentComponent } from './edit-task-component/edit-task-component.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { CompletenessPipe } from './completeness.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponent,
    EditTaskComponentComponent,
    NewTaskComponentComponent,
    CompletenessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
