import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { SharedService } from 'src/app/sevices/shared.service';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  item: Task;
  constructor(private _service: SharedService) {
    //     this._service.getAll()
    // .subscribe(i=>this.list=i);
    this.item = new Task();
  }

  ngOnInit() {
  }
  Add() {
    this._service.Add(this.item);
  }

}
