import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TouristComponent } from './tourist/tourist.component';
import { TouristListService } from './tourist-list.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AddTouristComponent } from './add-tourist/add-tourist.component';
import { UpdateTouristComponent } from './update-tourist/update-tourist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MessageService } from './message.service';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    TouristComponent,
    AddTouristComponent,
    UpdateTouristComponent,
    LoginComponent,
    RegisterComponent,
	HomeLayoutComponent,
	LoginLayoutComponent,
	ProfileComponent,
	EditProfileComponent,
	FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [
	TouristListService,
	AuthService,
	MessageService,
	AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
