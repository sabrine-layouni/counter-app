import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpComponent } from './up/up.component';
import { DownComponent } from './down/down.component';
import { ResetComponent } from './reset/reset.component';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [AppComponent, UpComponent, DownComponent, ResetComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
