import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMagasinierComponent } from './list-magasinier.component';

describe('ListMagasinierComponent', () => {
  let component: ListMagasinierComponent;
  let fixture: ComponentFixture<ListMagasinierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMagasinierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMagasinierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
