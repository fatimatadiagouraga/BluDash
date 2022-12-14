import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifColisComponent } from './modif-colis.component';

describe('ModifColisComponent', () => {
  let component: ModifColisComponent;
  let fixture: ComponentFixture<ModifColisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifColisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifColisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
