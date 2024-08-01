import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookComponentComponent } from './edit-book-component.component';

describe('EditBookComponentComponent', () => {
  let component: EditBookComponentComponent;
  let fixture: ComponentFixture<EditBookComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBookComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
