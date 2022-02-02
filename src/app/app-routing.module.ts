import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './notepad/error/error.component';
import { NotepadComponent } from './notepad/notepad.component';

const routes: Routes = [
  { path: '', component: NotepadComponent },
  { path: 'home', component: NotepadComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'page-not-found', component: ErrorComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
