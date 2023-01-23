import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1CursoComponent } from './view1-curso.component';

describe('View1CursoComponent', () => {
  let component: View1CursoComponent;
  let fixture: ComponentFixture<View1CursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1CursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View1CursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
