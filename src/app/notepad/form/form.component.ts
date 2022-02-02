import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormData } from '../form-data.model';

export interface Noise {
  [key: string]: AbstractControl;
}

export interface MoreNoise {
  form: FormData;
  isCreate: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  host: { class: 'form' },
})
export class FormComponent implements OnInit {
  @Input() isCreate!: boolean;

  @Input() currNote!: FormData | null;

  noteForm!: FormGroup;
  isSubmit!: boolean;

  @ViewChild('form') form: any;

  @Output() sendFormEvent: EventEmitter<MoreNoise> = new EventEmitter();

  @Output() sendDeleteEvent: EventEmitter<FormData | null> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Do nothing
  }

  ngOnChanges(): void {
    this.isSubmit = false;
    this.buildForm();
  }

  submitForm(_event: FormData): void {
    this.isSubmit = true;
    if (!this.noteForm.invalid) {
      this.sendForm(this.noteForm, this.isCreate);
      this.form.resetForm();
      this.isSubmit = false;
    }
  }

  deleteNote(): void {
    this.sendDeleteEvent.emit(this.currNote);
  }

  get f(): Noise {
    return this.noteForm.controls;
  }

  private buildForm(): void {
    this.noteForm = this.formBuilder.group({
      title: [this.currNote?.title, Validators.required],
      body: [this.currNote?.body, Validators.required],
    });
  }

  private sendForm(noteForm: { value: FormData }, isCreate: boolean): void {
    const form = noteForm.value;
    const data = { form, isCreate };
    this.sendFormEvent.emit(data);
  }
}
