import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasunoComponent } from './masuno.component';

describe('MasunoComponent', () => {
  let component: MasunoComponent;
  let fixture: ComponentFixture<MasunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
