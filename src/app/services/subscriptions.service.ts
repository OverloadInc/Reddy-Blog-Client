import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  addSubscription(subscription) {
    this.firestore.collection('subscribers').add(subscription).then(() => {
      console.log('Subscription saved successfully');
    })
  }

  validateSubscription(email) {
    return this.firestore.collection('subscribers', ref => ref.where('email', '==', email)).get();
  }
}
