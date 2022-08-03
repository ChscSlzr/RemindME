import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  template: `
  <input #newHero
    (keyup.enter)="addHero(newHero.value)"
    (blur)="addHero(newHero.value); newHero.value='' ">

  <button type="button" (click)="addHero(newHero.value)">Add</button>

  <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
`
  
})
export class CreatePage implements OnInit {
  heroes = ['alfred','bon'];
  addHero(newHero: string){
    if (newHero){
      this.heroes.push(newHero);
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  view(){
    this.router.navigate(['readedit']);
  }
}


