import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAdminComponent } from './modif-admin.component';

describe('ModifAdminComponent', () => {
  let component: ModifAdminComponent;
  let fixture: ComponentFixture<ModifAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
