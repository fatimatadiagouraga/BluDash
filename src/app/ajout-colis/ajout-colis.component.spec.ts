import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutColisComponent } from './ajout-colis.component';

describe('AjoutColisComponent', () => {
  let component: AjoutColisComponent;
  let fixture: ComponentFixture<AjoutColisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutColisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutColisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
