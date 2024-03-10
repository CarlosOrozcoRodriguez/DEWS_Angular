import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { AnimeChanComponent } from './pages/anime-chan/anime-chan.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    {path: '', component:HomeComponent},
    {path: 'clima', component:ClimaComponent},
    {path: 'anime-chan', component:AnimeChanComponent},
    {path: '**',redirectTo: '',pathMatch:'full' },
    
    ];