import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  host: { class: 'notes' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesComponent {
  @Input()
  notes!: object[];

  // @Output()
  // sendCreateNoteEvent = new EventEmitter();

  // FIXME
  createNoteEvent(): void {
    console.log('create note event...');
    // this.sendCreateNoteEvent.emit(event);
  }
}
