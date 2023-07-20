import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotolistComponent } from './fotolist.component';

describe('FotolistComponent', () => {
  let component: FotolistComponent;
  let fixture: ComponentFixture<FotolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotolistComponent]
    });
    fixture = TestBed.createComponent(FotolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
