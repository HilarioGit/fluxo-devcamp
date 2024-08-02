import { Component } from '@angular/core';
import { MenuComponent } from '../../estrutura/menu/menu.component';
import { GaleriaComponent } from '../../estrutura/galeria/galeria.component';
import { RodapeComponent } from '../../estrutura/rodape/rodape.component';
import { HeaderComponent } from '../header/header.component';
import { EquipeComponent } from '../../estrutura/equipe/equipe.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MenuComponent,
    GaleriaComponent,
    RodapeComponent,
    HeaderComponent,
    EquipeComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
