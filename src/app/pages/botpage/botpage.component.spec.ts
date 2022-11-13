import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotpageComponent } from './botpage.component';

describe('BotpageComponent', () => {
  let component: BotpageComponent;
  let fixture: ComponentFixture<BotpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
