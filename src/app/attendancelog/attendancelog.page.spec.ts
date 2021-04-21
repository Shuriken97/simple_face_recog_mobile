import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttendancelogPage } from './attendancelog.page';

describe('AttendancelogPage', () => {
  let component: AttendancelogPage;
  let fixture: ComponentFixture<AttendancelogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancelogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttendancelogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
