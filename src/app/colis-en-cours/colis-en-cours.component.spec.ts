import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisEnCoursComponent } from './colis-en-cours.component';

describe('ColisEnCoursComponent', () => {
  let component: ColisEnCoursComponent;
  let fixture: ComponentFixture<ColisEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisEnCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColisEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
