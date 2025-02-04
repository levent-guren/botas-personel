import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-ana-sayfa',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './ana-sayfa.component.html',
  styleUrl: './ana-sayfa.component.scss'
})
export class AnaSayfaComponent {

}
