import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SloveListComponent } from './sloves/slove-list/slove-list.component';
import { SloveCreateComponent } from './sloves/slove-create/slove-create.component';
import { SloveDeleteComponent } from './sloves/slove-delete/slove-delete.component.ts';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; // Ensure the guard is imported
import { SloveEditComponent } from './sloves/slove-edit/slove-edit.component';

@NgModule({
  declarations: [
    SloveEditComponent,
    AppComponent,
    SloveListComponent,
    SloveCreateComponent,
    SloveDeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard , provideHttpClient()], // Add this line], // Ensure the guard is provided
  bootstrap: [AppComponent]
})
export class AppModule { }
