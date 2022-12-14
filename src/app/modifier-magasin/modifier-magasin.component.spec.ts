import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMagasinComponent } from './modifier-magasin.component';

describe('ModifierMagasinComponent', () => {
  let component: ModifierMagasinComponent;
  let fixture: ComponentFixture<ModifierMagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMagasinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
