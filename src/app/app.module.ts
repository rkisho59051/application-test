import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CursorDirective } from './directives/cursor.directive';
import { SubscriberIdProofComponent } from './components/subscriber/subscriber-id-proof/subscriber-id-proof.component';
import { SubscriberDetailsComponent } from './components/subscriber/subscriber-details/subscriber-details.component';
import { SubscriberInformationComponent } from './components/subscriber/subscriber-information/subscriber-information.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    NotFoundComponent,
    CursorDirective,
    SubscriberIdProofComponent,
    SubscriberDetailsComponent,
    SubscriberInformationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
