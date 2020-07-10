import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout Components
import { BannerComponent } from './layout/header/banner/banner.component';
import { NavigationComponent } from './layout/header/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';

// Functional Components
import { SendMessageFormComponent } from './components/send-message-form/send-message-form.component';

// Page Components
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavigationComponent,
    FooterComponent,
    SendMessageFormComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
