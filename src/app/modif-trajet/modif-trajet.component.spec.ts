import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTrajetComponent } from './modif-trajet.component';

describe('ModifTrajetComponent', () => {
  let component: ModifTrajetComponent;
  let fixture: ComponentFixture<ModifTrajetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifTrajetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
