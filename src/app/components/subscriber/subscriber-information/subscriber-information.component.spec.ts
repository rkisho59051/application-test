import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberInformationComponent } from './subscriber-information.component';

describe('SubscriberInformationComponent', () => {
  let component: SubscriberInformationComponent;
  let fixture: ComponentFixture<SubscriberInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
