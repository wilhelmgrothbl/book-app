import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookTwoComponent } from './book-two/book-two.component';
import { BookOneComponent } from './book-one/book-one.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BookThreeComponent } from './book-three/book-three.component';
import { BookFourComponent } from './book-four/book-four.component';
import { BookFiveComponent } from './book-five/book-five.component';
import { BookSixComponent } from './book-six/book-six.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book-one', component: BookOneComponent },
  { path: 'book-two', component: BookTwoComponent },
  { path: 'book-three', component: BookThreeComponent },
  { path: 'book-four', component: BookFourComponent },
  { path: 'book-five', component: BookFiveComponent },
  { path: 'book-six', component: BookSixComponent },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  declarations: [
    AppComponent,
    BookTwoComponent,
    BookOneComponent,
    BookThreeComponent,
    NavbarComponent,
    HomeComponent,
    BookFourComponent,
    BookFiveComponent,
    BookSixComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
