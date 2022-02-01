import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  host: { class: 'error' },
})
export class ErrorComponent implements OnInit {
  message = '4 0 4 E R R O R';

  constructor() { }

  ngOnInit(): void {
    // Do nothing
  }
}
