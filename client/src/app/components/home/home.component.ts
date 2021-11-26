import { Component, Input, OnInit } from '@angular/core';
import { MeanService } from './../../services/mean.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios!: any;
  actionList!: string;

  constructor(public service: MeanService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.service.listarUsuarios().subscribe((res:any) => {
      this.usuarios = res.data;
    }); 
  }

  onChangeAction( $event: string ) {
    this.usuarios.push($event);
  }

  eliminarUsuario(id: number){
    // Verificar que va a eliminar el registro
    Swal.fire({
      title:'¿Esta seguro de querer eliminar el registro?',
      text: `Va a borrar el registro`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if(resp.value){
        this.service.eliminarUsuario(id).subscribe(resp => {
          this.usuarios = this.usuarios.filter((value: any) => value.id !== id);
        });
      }
    });
  }

}
