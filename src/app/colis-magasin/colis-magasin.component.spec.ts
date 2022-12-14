import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisMagasinComponent } from './colis-magasin.component';

describe('ColisMagasinComponent', () => {
  let component: ColisMagasinComponent;
  let fixture: ComponentFixture<ColisMagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisMagasinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColisMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
