import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  /**
   * Constructor with ActivateRoute dependency injection.
   * @param activatedRoute the ActivateRoute instance.
   */
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    // Subscribe the observable to get parameters from the routerLink.
    this.activatedRoute.paramMap.subscribe(value => {

      // Gets the id post
      let id = value.get('id');

      // Gets the title post
      const title = value.get('title');
    })
  };
}
