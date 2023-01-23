import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View2IncluirComponent } from './view2-incluir.component';

describe('View2IncluirComponent', () => {
  let component: View2IncluirComponent;
  let fixture: ComponentFixture<View2IncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View2IncluirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View2IncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
