import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { SharedService } from 'src/app/sevices/shared.service';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  //constructor(private _router: Router) { }

  list: Task[];
  constructor(private _service: SharedService) {
    this._service.getAll()
      .subscribe(i => this.list = i);
  }

  ngOnInit() {
  }

  update() {
    //this._router.navigateByUrl('/update/');
  }

}
