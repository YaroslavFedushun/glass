import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GMapModule} from 'primeng/gmap';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/home-page/header/header.component';
import { ContentComponent } from './components/home-page/content/content.component';
import { FooterComponent } from './components/home-page/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryContentComponent } from './components/gallery/gallery-content/gallery-content.component';
import { GalleryHeaderComponent } from './components/gallery/gallery-header/gallery-header.component';
import { GalleryContactComponent } from './components/gallery/gallery-contact/gallery-contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { GlassShowersComponent } from './components/glass-showers/glass-showers.component';
import { MessageService} from 'primeng/api';
import {GoogleMapComponent} from './components/home-page/google-map/google-map.component';
import { ToastModule} from 'primeng/toast';
import {Dialog} from 'primeng/dialog';
import {Checkbox, Footer, MultiSelectItem} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PhoneNavComponent} from './components/phone-nav/phone-nav.component';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { GlassStairsComponent } from './components/glass-stairs/glass-stairs.component';
import { SendMailsComponent } from './components/send-mails/send-mails.component';




const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/sklyani-dushovi', component: GlassShowersComponent},
  { path: 'gallery/sklyani-shody', component: GlassStairsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    GalleryComponent,
    GalleryContentComponent,
    GalleryHeaderComponent,
    GalleryContactComponent,
    HomePageComponent,
    GlassShowersComponent,
    GoogleMapComponent,
    Dialog,
    Checkbox,
    MultiSelectItem,
    PhoneNavComponent,
    GlassStairsComponent,
    SendMailsComponent,
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    GMapModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    MenuModule,
    ReactiveFormsModule,
  ],
  providers: [
    MessageService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
