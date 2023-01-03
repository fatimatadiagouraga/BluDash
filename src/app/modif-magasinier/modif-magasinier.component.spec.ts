import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMagasinierComponent } from './modif-magasinier.component';

describe('ModifMagasinierComponent', () => {
  let component: ModifMagasinierComponent;
  let fixture: ComponentFixture<ModifMagasinierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifMagasinierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifMagasinierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
