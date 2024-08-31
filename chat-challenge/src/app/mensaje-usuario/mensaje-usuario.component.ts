import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SalaComponent } from '../sala/sala.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css',
})
export class MensajeUsuarioComponent {
  @Input() user: string = "";
  @Output() nuevoMensaje = new EventEmitter<string>();
  texto: string = "";
  agregarMensaje() {
    this.nuevoMensaje.emit(this.texto);
    this.texto = "";
  }
}
