import { Routes } from '@angular/router';

export const routes: Routes = [
   {  
      path: '', 
      loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent),
      title: 'Home'
   },
   { 
      path: 'registration', 
      loadComponent: () => import('./feature/student-registration/student-registration.component').then(m => m.StudentRegistrationComponent), 
      title: 'Student Registration'
   },
   { 
      path: '**', 
      loadComponent: () => import('./feature/pagenotfound/pagenotfound.component').then(m => m.PagenotfoundComponent), 
      title: 'Page Not Found'
   }
];
