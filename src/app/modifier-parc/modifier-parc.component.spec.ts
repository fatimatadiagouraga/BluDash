import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierParcComponent } from './modifier-parc.component';

describe('ModifierParcComponent', () => {
  let component: ModifierParcComponent;
  let fixture: ComponentFixture<ModifierParcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierParcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
