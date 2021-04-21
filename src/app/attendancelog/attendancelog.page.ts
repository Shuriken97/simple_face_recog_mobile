import { Component, OnInit } from '@angular/core';
import { Services, Attendance } from './../services/service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-attendancelog',
  templateUrl: './attendancelog.page.html',
  styleUrls: ['./attendancelog.page.scss'],
})
export class AttendancelogPage implements OnInit {
  attendance: Attendance[];

  constructor(
    private service: Services,
    private alertCtrl: AlertController,
    private router: Router
    ) {}

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.attendance = response;
    })
  }

  RemoveRecord(atten_id: string) {
    this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to delete?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.service.delete(atten_id).subscribe(() => {
            this.attendance = this.attendance.filter(std => std.atten_id !== atten_id);
          });
          }
      },
      { text: 'No'}
      ]
    })
    .then(alertEl => alertEl.present());
  }

  async logout(){
    this.router.navigate(['/login']);
    }
}