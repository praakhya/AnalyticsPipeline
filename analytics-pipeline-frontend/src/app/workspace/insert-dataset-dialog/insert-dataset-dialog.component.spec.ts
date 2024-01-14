import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDatasetDialogComponent } from './insert-dataset-dialog.component';

describe('InsertDatasetDialogComponent', () => {
  let component: InsertDatasetDialogComponent;
  let fixture: ComponentFixture<InsertDatasetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertDatasetDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertDatasetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
