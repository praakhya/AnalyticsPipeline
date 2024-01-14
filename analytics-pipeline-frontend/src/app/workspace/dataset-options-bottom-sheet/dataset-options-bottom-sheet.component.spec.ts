import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetOptionsBottomSheetComponent } from './dataset-options-bottom-sheet.component';

describe('DatasetOptionsBottomSheetComponent', () => {
  let component: DatasetOptionsBottomSheetComponent;
  let fixture: ComponentFixture<DatasetOptionsBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatasetOptionsBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatasetOptionsBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
