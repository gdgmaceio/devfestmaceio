import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Speaker } from '../models/speaker';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class SpeakerService {
  speakersCollection: AngularFirestoreCollection<Speaker>;
  speakers: Observable<Speaker[]>;

  constructor(public afs: AngularFirestore) {
    this.speakers = this.afs.collection('speakers').valueChanges();
  }

  getSpeakers() {
    return this.speakers;
  }
}