import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookTwoComponent } from './book-two/book-two.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'book-two', component: BookTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
