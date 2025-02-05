import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AnaSayfaComponent } from './components/ana-sayfa/ana-sayfa.component';
import { PersonelKayitComponent } from './components/personel-kayit/personel-kayit.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'anaSayfa', component: AnaSayfaComponent, canActivate: [authGuard],
        children: [
            { path: 'personelKayit', component: PersonelKayitComponent }
        ]
    },
];
