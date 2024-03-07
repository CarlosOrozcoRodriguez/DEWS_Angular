import { RouterOutlet, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';

export const routes: Routes = [

    {path: '', component:RouterOutlet},
    {path: 'clima', component:ClimaComponent},
    
    {path: '**',redirectTo: '',pathMatch:'full' },
    
    ];