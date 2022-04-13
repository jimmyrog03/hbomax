import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ShowCaseCardComponent } from './showcasecard.component';

describe('ShowCaseCardComponent', () => {
  let component: ShowCaseCardComponent;
  let fixture: ComponentFixture<ShowCaseCardComponent>;
  let cardDe: DebugElement;
  let cardDeImg: DebugElement;
  let cardEl: HTMLElement;
  let cardElImg: HTMLElement;
  let expectedCardTitle: string = "Test Title";
  let expectedHeading: string = "Test Heading";
  let expectedSubtext: string= "Test Subtext";
  let expectedImgUrl: string = "./assets/test";
  let expectedBtnUrl: string = "./assets/bootstrap-icons.svg#play-fill";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [ShowCaseCardComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;
    component.title = "Test Title";
    component.heading = "Test Heading";
    component.subtext = "Test Subtext";
    component.img = "./assets/test";
    fixture.detectChanges();

  });

  it('should create showcase card component', () => {
    expect(component).toBeDefined();
  });

  it('should display showcase card title', () => {
    expect(cardEl.textContent).toContain(expectedCardTitle);
  });

  it('should display showcase heading', () => {
    expect(cardEl.textContent).toContain(expectedHeading);
  });

  it('should display showcase subtext', () => {
    expect(cardEl.textContent).toContain(expectedSubtext);
  });

  it('should display showcase img url', () => {
    expect(cardEl.innerHTML).toContain(expectedImgUrl);
  });

  it('Button design should use expected asset url', () => {
    expect(cardEl.innerHTML).toContain(expectedBtnUrl);
  });
});