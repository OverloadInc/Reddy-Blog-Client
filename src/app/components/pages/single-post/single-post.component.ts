import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../services/posts.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  postData: any;
  similarPostArray: Array<object>;

  constructor(private route: ActivatedRoute, private postService: PostsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(value => {

      this.postService.countViews(value.id);

      this.postService.loadOnePost(value.id).subscribe(post => {
        this.postData = post;

        this.loadSimilarPosts(this.postData.category.categoryId);
      })
    })
  }

  loadSimilarPosts(categoryId) {
    this.postService.loadSimilar(categoryId).subscribe(value => {
      this.similarPostArray = value;
    });
  }
}
