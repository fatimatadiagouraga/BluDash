import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMagasinComponent } from './ajout-magasin.component';

describe('AjoutMagasinComponent', () => {
  let component: AjoutMagasinComponent;
  let fixture: ComponentFixture<AjoutMagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMagasinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
