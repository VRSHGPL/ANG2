/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TryIterationComponent } from './try-iteration.component';

describe('TryIterationComponent', () => {
  let component: TryIterationComponent;
  let fixture: ComponentFixture<TryIterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryIterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryIterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
