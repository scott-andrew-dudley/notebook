import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

export interface Noise {
  [key: string]: AbstractControl;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  host: { class: 'form' },
})
export class FormComponent implements OnInit {
  @Input() isCreate!: boolean;

  noteForm!: FormGroup;
  isSubmit = false;

  // @Output()
  // sendFormEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  submitForm(event: Event): void {
    this.isSubmit = true;
    if (!this.noteForm.invalid) {
      alert('Fine. More work...');
    } else {
      alert(`How could you even fail that? Imagine it's easy and try again.`);
    }
    // this.sendFormEvent.emit(event);
  }

  get f(): Noise {
    return this.noteForm.controls;
  }

  private buildForm(): void {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
}
