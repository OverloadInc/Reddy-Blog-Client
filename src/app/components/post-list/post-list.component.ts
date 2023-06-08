import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // List of posts
  postList = [
    {
      id: 1,
      title: "Post 1",
      content: "Content of Post 1"
    },
    {
      id: 2,
      title: "Post 2",
      content: "Content of Post 2"
    },
    {
      id: 3,
      title: "Post 3",
      content: "Content of Post 3"
    },
  ];

  /**
   * Constructor with ActivatedRoute dependency injection.
   * @param activatedRoute the ActivatedRoute instance.
   */
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // Gets several parameters by using [queryParamMap]
    this.activatedRoute.queryParamMap.subscribe(value => {

      const page = value.get('page1');
      const orderBy = value.get('orderBy');
    });
  }
}
