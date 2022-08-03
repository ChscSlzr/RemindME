import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readedit',
  templateUrl: './readedit.page.html',
  styleUrls: ['./readedit.page.scss'],
})
export class ReadeditPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  update(){
    this.router.navigate(['update']);
  }

}
