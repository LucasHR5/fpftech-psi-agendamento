import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionaisList } from './profissionais-list';

describe('ProfissionaisList', () => {
  let component: ProfissionaisList;
  let fixture: ComponentFixture<ProfissionaisList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfissionaisList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionaisList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
