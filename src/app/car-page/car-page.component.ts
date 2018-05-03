import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  id: number;
  name: string;
  year: string;
  color: string;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // когда обращаемся в снепшот мы забираем данные только 1 раз
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.color = this.route.snapshot.queryParams['color'];
    this.year = this.route.snapshot.queryParams['year'];
    this.hash = this.route.snapshot.fragment;

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.color = params['color'];
      this.year = params['year'];
    });
  }

  openBentleyPage() {
    this.router.navigate(['./cars', 8, 'Bentley'], {
      queryParams: {
        color: 'pink',
        year: 1995
      },
      fragment: 'pic'
    });
  }

}
