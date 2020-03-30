import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberIdProofComponent } from './subscriber-id-proof.component';

describe('SubscriberIdProofComponent', () => {
  let component: SubscriberIdProofComponent;
  let fixture: ComponentFixture<SubscriberIdProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberIdProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberIdProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
