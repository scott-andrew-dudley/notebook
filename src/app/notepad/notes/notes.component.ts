import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormData } from '../form-data.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  host: { class: 'notes' },
})
export class NotesComponent {
  @Input() notes!: FormData[] | null;

  @Input() currNote!: FormData | null;

  @Input() isCreate!: boolean;

  @Output() sendCreateNoteEvent: EventEmitter<FormData> = new EventEmitter();

  @Output() sendCreateNewNoteEvent: EventEmitter<null> = new EventEmitter();

  createNoteEvent(note: FormData): void {
    this.sendCreateNoteEvent.emit(note);
  }

  createNewNoteEvent(): void {
    this.sendCreateNewNoteEvent.emit();
  }
}
