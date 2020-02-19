import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
  filteringForm: FormGroup;

  @Output() filtered: EventEmitter<FilterRequest> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Form builder with default values
    this.filteringForm = this.fb.group({
      latitude: ['53.339428', Validators.required],
      longitude: ['-6.257664', Validators.required],
      range: ['100', Validators.required]
    });
  }

  doFilter(form: FormGroup) {
    this.filtered.emit(form.value);
  }

}
