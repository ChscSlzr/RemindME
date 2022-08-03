import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ReadeditPage } from './readedit.page';

describe('ReadeditPage', () => {
  let component: ReadeditPage;
  let fixture: ComponentFixture<ReadeditPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadeditPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadeditPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  }));

  it('should update', () => {
    spyOn(router,'navigate');
    expect(router.navigate).toHaveBeenCalledWith(['update']);
  });
});
