import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../../services/posts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredPostArray: Array<object> = [];
  latestPostArray: Array<object> = [];

  constructor(private postService: PostsService) {
    this.postService.loadFeatured().subscribe(value => {
      this.featuredPostArray = value;
    });

    this.postService.loadLatest().subscribe(value => {
      this.latestPostArray = value;
    });
  }

  ngOnInit(): void {
  }
}
