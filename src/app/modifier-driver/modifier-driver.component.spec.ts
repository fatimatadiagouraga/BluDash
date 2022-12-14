import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDriverComponent } from './modifier-driver.component';

describe('ModifierDriverComponent', () => {
  let component: ModifierDriverComponent;
  let fixture: ComponentFixture<ModifierDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
