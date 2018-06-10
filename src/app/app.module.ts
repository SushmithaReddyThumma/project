import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule,FormGroup,ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'primeng/primeng';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  
} from 'angular5-social-login';
import { AboutComponent } from './about/about.component';
import { VendorComponent } from './vendor/vendor.component';

import { RegisterComponent } from './register/register.component';
import { EduComponent } from './edu/edu.component';
import { ImmigrationComponent } from './immigration/immigration.component';
import { WorkComponent } from './work/work.component';
import { SubmitComponent } from './submit/submit.component';
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [{
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('2070774416285250')
    },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('50573442860-6lf1eme9lnsjra8vl8mil36qn2ecm959.apps.googleusercontent.com')
      },
    ]
  );
  return config;
}

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'edu', component: EduComponent },
  { path: 'work', component: WorkComponent },
  {path:'immigration', component:ImmigrationComponent},
  { path: 'submit', component: SubmitComponent },
 
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    VendorComponent,
   
 
   
    RegisterComponent,
   
 
   
    EduComponent,
   
 
   
    ImmigrationComponent,
   
 
   
    WorkComponent,
   
 
   
    SubmitComponent,

   
],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
   FileUploadModule,
    RouterModule.forRoot(
      appRoutes)
      
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
