import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoneComponent } from './showone.component';

describe('ShowoneComponent', () => {
  let component: ShowoneComponent;
  let fixture: ComponentFixture<ShowoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
