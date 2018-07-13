import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { TouristComponent }      from './tourist/tourist.component';
import { AddTouristComponent }      from './add-tourist/add-tourist.component';
import { UpdateTouristComponent } from './update-tourist/update-tourist.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
 
const routes: Routes = [
	
	{ path: '', component: HomeLayoutComponent, canActivate:[AuthGuard],
		children: [
				{ path: '', component: DashboardComponent },
				{ path: 'tourist-list', component: TouristComponent },
				{ path: 'add-tourist', component: AddTouristComponent },
				{ path: 'updateTourist/:id', component: UpdateTouristComponent },
				{ path: 'profile', component: ProfileComponent },
				{ path: 'edit-profile', component: EditProfileComponent },
			] 
	},
	{ path: 'login', component: LoginLayoutComponent,
		children: [{ path: '', component: LoginComponent }] 
	},
	{ path: 'signup', component: LoginLayoutComponent,
		children: [{ path: '', component: RegisterComponent  }] 
	},	
	{ path : '', redirectTo:'login', pathMatch : 'full'}
]; 

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
