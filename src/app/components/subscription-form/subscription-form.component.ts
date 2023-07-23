import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Subscription} from "../../models/subscription";
import {SubscriptionsService} from "../../services/subscriptions.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  subscriptionForm: any;
  isEmailDuplicated: boolean = false;
  isSubscribed: boolean = false;

  constructor(private formBuilder: FormBuilder, private subscriptionService: SubscriptionsService, private toastr: ToastrService) {
    this.subscriptionForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get formControl() {
    return this.subscriptionForm.controls;
  }

  onSubmit() {
    const subscription: Subscription = {
      name: this.formControl.name.value,
      email: this.formControl.email.value
    }

    this.subscriptionService.validateSubscription(subscription.email).subscribe(value => {
      if(value.empty) {
        this.isEmailDuplicated = false;
        this.isSubscribed = true;
        this.subscriptionService.addSubscription(subscription);
      }
      else {
        this.isEmailDuplicated = true;
      }
    })
  }
}
