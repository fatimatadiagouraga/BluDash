import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMagasinierComponent } from './ajout-magasinier.component';

describe('AjoutMagasinierComponent', () => {
  let component: AjoutMagasinierComponent;
  let fixture: ComponentFixture<AjoutMagasinierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMagasinierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutMagasinierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
