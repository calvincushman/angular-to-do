import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'task-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allTasks">All Tasks</option>
    <option value="completedTasks">Completed Tasks</option>
    <option value="incompleteTasks" selected="selected">Incomplete Tasks</option>
  </select>


  <ul>
    <li (click)="isDone(currentTask)" *ngFor="let currentTask of childTaskList | completeness:filterByCompleteness">{{currentTask.description}} {{currentTask.priority}}
    <input *ngIf="currentTask.done === true" type="checkbox" checked (click)="toggleDone(currentTask, false)"/>
    <input *ngIf="currentTask.done === false" type="checkbox" (click)="toggledone(currentTask, true)"/>
     <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button></li>
  </ul>
  `
})


export class TaskListComponentComponent implements OnInit {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  toggleDone(clickedTask: Task, setCompleteness: boolean) {
    clickedTask.done = setCompleteness;
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("this task is done!");
    } else {
      alert("this task is not done. better get crackin")
    }

  }

  filterByCompleteness: string = "incompleteTasks";

  ngOnInit() {
  }

}
