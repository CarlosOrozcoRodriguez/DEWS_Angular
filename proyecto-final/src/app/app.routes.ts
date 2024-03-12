import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { AnimeChanComponent } from './pages/anime-chan/anime-chan.component';
import { NekoBestComponent } from './pages/neko-best/neko-best.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrosListaComponent } from './pages/libros-lista/libros-lista.component';
import { LibroDetalleComponent } from './pages/libro-detalle/libro-detalle.component';
import { AddLibroComponent } from './pages/libro-add/libro-add.component';
import { AdivinanzaComponent } from './components/adivinanza/adivinanza.component';
import { InterruptorComponent } from './components/interruptor/interruptor.component';


export const routes: Routes = [

    {path: '', component:HomeComponent},
    {path: 'clima', component:ClimaComponent},
    {path: 'anime-chan', component:AnimeChanComponent},
    {path: 'neko-best', component:NekoBestComponent},
    {path: 'noticias', component:NoticiasComponent},
    {path: 'libros', component:LibrosListaComponent},
    {path: 'libros/:id', component:LibroDetalleComponent},
    {path: 'add', component:AddLibroComponent},
    {path: 'adivinanza', component:AdivinanzaComponent},
    {path: 'interruptor', component:InterruptorComponent},
    {path: '**',redirectTo: '',pathMatch:'full' },
    
    ];