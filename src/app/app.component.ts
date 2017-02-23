import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app works!';

    constructor(
      private route: ActivatedRoute,
      private router: Router,

    ) {

    }

    ngOnInit() {
      console.log(this.route, "just the giant route obj from app com")
      console.log(this.router, "just the giant ROUTER obj from app com")


    }
}
