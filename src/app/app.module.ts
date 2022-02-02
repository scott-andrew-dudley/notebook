import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ErrorComponent } from './notepad/error/error.component';
import { FooterComponent } from './notepad/footer/footer.component';
import { FormComponent } from './notepad/form/form.component';
import { HeaderComponent } from './notepad/header/header.component';
import { NotepadComponent } from './notepad/notepad.component';
import { NotesComponent } from './notepad/notes/notes.component';
import { SnackBarComponent } from './notepad/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    NotepadComponent,
    NotesComponent,
    SnackBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
