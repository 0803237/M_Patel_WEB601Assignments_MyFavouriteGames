import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFilterPipe } from './game-filter.pipe';

describe('PipesComponent', () => {
  let component: GameFilterPipe;
  let fixture: ComponentFixture<GameFilterPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFilterPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFilterPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
