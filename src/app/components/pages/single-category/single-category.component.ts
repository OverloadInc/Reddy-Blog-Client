import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../services/posts.service";

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  postsArray: Array<object>;
  categoryObject: any;

  constructor(private route: ActivatedRoute, private postService: PostsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(value => {

      this.categoryObject = value;

      this.postService.loadCategoryPosts(value.id).subscribe(post => {
        this.postsArray = post;
      });
    });
  }

}
