import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { AnimeChanComponent } from './pages/anime-chan/anime-chan.component';
import { NekoBestComponent } from './pages/neko-best/neko-best.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    {path: '', component:HomeComponent},
    {path: 'clima', component:ClimaComponent},
    {path: 'anime-chan', component:AnimeChanComponent},
    {path: 'neko-best', component:NekoBestComponent},
    {path: 'noticias', component:NoticiasComponent},
    {path: '**',redirectTo: '',pathMatch:'full' },
    
    ];