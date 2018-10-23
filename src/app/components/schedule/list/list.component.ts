import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './../../../services/schedule.service';
import { Schedule } from './../../../models/schedule';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  mornings: any[];
  afternoons: any[];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.scheduleService.getSchedules().subscribe(schedules => {
      this.mornings = schedules[1].hours;
      this.afternoons = schedules[0].hours;
    });
  }
}
