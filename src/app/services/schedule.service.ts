import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Schedule } from '../models/schedule';
import { Observable } from 'rxjs';

@Injectable()
export class ScheduleService {
  schedulesCollection: AngularFirestoreCollection<Schedule>;
  schedules: Observable<any[]>;

  constructor(public afs: AngularFirestore) {
    this.schedules = this.afs.collection('schedules').valueChanges();
  }

  getSchedules() {
    return this.schedules;
  }
}