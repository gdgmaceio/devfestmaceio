import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './../../../services/schedule.service';
import { Schedule } from './../../../models/schedule';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ScheduleListComponent implements OnInit {
  schedules: Schedule[];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.scheduleService.getSchedules().subscribe(schedules => {
      this.schedules = schedules;
    });
  }
}
