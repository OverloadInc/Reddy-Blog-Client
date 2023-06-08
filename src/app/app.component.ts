import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reddy-blog-client';

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    // Creates an observable
    const obsTest$ = new Observable(observer => {

      // Return several values from the Observable by using the next() method
      observer.next('Returned 1 from the Observable');
      observer.next('Returned 2 from the Observable');
      observer.next('Returned 3 from the Observable');
    }).subscribe(value => {
      console.log(value);
    });
  }

  /**
   * Navigates to different components by using routers.
   */
  submit() {
    //this.router.navigate(['/posts']);
    //this.router.navigate(['/post', 1, 'postTitle']);
    this.router.navigate(['/posts'], {queryParams:{page1: 1, orderBy: 'newest'}});
  }

}
