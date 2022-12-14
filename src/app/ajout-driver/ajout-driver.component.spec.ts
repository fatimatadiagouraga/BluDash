import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDriverComponent } from './ajout-driver.component';

describe('AjoutDriverComponent', () => {
  let component: AjoutDriverComponent;
  let fixture: ComponentFixture<AjoutDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
