import { Component, OnInit } from '@angular/core';
import { SpeakerService } from './../../../services/speaker.service';
import { Speaker } from './../../../models/speaker';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class SpeakerListComponent implements OnInit {
  speakers: Speaker[];

  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
    this.speakerService.getSpeakers().subscribe(speakers => {
      this.speakers = speakers;
    });
  }

}
