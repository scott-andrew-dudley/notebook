import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss'],
  host: { class: 'notepad' },
})
export class NotepadComponent implements OnInit {
  title = 'Notebook';
  date = new Date().getFullYear();
  notes: object[] = [];
  isCreate = true;

  constructor() { }

  ngOnInit(): void {
    // Do nothing
  }

  // FIXME
  // getCreateNoteEvent(event: Event): void {
  //   console.log('Create note event: ', event);
  // }
}
