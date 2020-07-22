import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App Components
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

// Import Components
import { FormsModule } from '@angular/forms';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavigationComponent,
    FooterComponent,
    SendMessageFormComponent,
    HomeComponent,
    PageNotFoundComponent,
    FeatureCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
