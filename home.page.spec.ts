import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    router =  TestBed.get(Router);
    fixture.detectChanges();
  }));

  it('should create', () => {
    spyOn(router,'navigate');
    expect(router.navigate).toHaveBeenCalledWith(['create']);
  });
  it('should go to view', () => {
    spyOn(router,'navigate');
    expect(router.navigate).toHaveBeenCalledWith(['readedit']);
  });
});
