import { Component } from '@angular/core';
import { Services } from './../services/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {}
 
  async click1(){
    this.router.navigate(['/attendancelog']);
    }
 
  async logout(){
      this.router.navigate(['/login']);
      }
}
