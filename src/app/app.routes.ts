import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AnaSayfaComponent } from './components/ana-sayfa/ana-sayfa.component';
import { PersonelKayitComponent } from './components/personel-kayit/personel-kayit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'anaSayfa', component: AnaSayfaComponent,
        children: [
            { path: 'personelKayit', component: PersonelKayitComponent }
        ]
    },
];
