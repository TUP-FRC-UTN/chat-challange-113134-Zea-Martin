import { Component } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent, FormsModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css',
})
export class SalaComponent {
  usuarios: string[] = ["Pepe", "María"];
  mensajes: { usuario: string; texto: string }[] = [];
  texto: string = "";

  onAgregarMensaje(user: string, mensaje: string) {
    this.mensajes.push({ usuario: user, texto: mensaje });
    console.log(this.mensajes)
  }
}
