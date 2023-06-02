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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book-one', component: BookOneComponent },
  { path: 'book-two', component: BookTwoComponent },
  { path: 'book-three', component: BookThreeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    BookTwoComponent,
    BookOneComponent,
    BookThreeComponent,
    NavbarComponent,
    HomeComponent,
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
