import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FormData } from './form-data.model';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss'],
  host: { class: 'notepad' },
})
export class NotepadComponent implements OnInit {
  title = 'Notebook';
  date = new Date().getFullYear();
  notes: FormData[] = [];
  isCreate = true;
  currNote: FormData | null = null;

  ngOnInit(): void {
    const savedNotes = localStorage.getItem('savedNotes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
  }

  constructor(private snackBar: MatSnackBar) {}

  getFormEvent(data: { form: FormData; isCreate: boolean }): FormData[] | undefined {
    if (!data.isCreate) {
      this.removeFromNotes(this.currNote);
    }
    const notes = this.getNewNotesArray(data.form);
    this.saveNotesToStorage(notes);
    this.currNote = null;
    this.isCreate = true;
    this.openSnackBar();

    return notes;
  }

  getCreateNoteEvent(note: FormData): void {
    this.isCreate = false;
    this.currNote = note;
  }

  getCreateNewNoteEvent(): void {
    this.currNote = null;
    this.isCreate = true;
  }

  getDeleteEvent(note: FormData | null): void {
    this.removeFromNotes(note);
    this.saveNotesToStorage(this.notes);
    this.currNote = null;
    this.isCreate = true;
  }

  openSnackBar() {
    const data = { duration: 3000 };
    this.snackBar.openFromComponent(SnackBarComponent, data);
  }

  private getNewNotesArray(form: FormData): FormData[] {
    const currNotes = this.notes;
    currNotes.push(form);
    this.notes = currNotes;

    return this.notes;
  }

  private saveNotesToStorage(notes: FormData[]): void {
    localStorage.setItem('savedNotes', JSON.stringify(notes));
  }

  private removeFromNotes(note: FormData | null): void {
    this.notes.forEach((item, index) => {
      if (item.title === note?.title) this.notes.splice(index, 1);
    });
  }
}
