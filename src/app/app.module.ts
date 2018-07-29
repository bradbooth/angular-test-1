import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ArenaCardComponent } from './search-page/arena-card/arena-card.component';
import { FilterSidebarComponent } from './search-page/filter-sidebar/filter-sidebar.component';
import { MapComponent } from './search-page/map/map.component';
import { BookingPageComponent } from './booking-page/booking-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPageComponent,
    ArenaCardComponent,
    FilterSidebarComponent,
    MapComponent,
    BookingPageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
