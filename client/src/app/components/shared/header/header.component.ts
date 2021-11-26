import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MeanService } from 'src/app/services/mean.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() addAction: EventEmitter<string> = new EventEmitter();
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('formUsuario') formUsuario!: NgForm; 

  usuario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
  });

  constructor(public service: MeanService) { }

  ngOnInit(): void { }

  getEmailErrorMessage() {
    if (this.usuario.value.email.hasError('required')) {
      return 'Debes introducir un correo';
    }

    return this.usuario.value.email.hasError('email') ? 'Email no valido' : '';
  }

  getFirtsNameErrorMessage() {
    return 'Debes introducir un nombre';
  }

  getLastNameErrorMessage() {
    return 'Debes introducir un apellido';
  }

  addUser(usuario: any){
    this.service.agregarUsuario(usuario.value).subscribe(resp => {
      this.addAction.emit(resp);
    });
    this.closeModal.nativeElement.click();
    this.usuario.reset();
  }

}
