import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidacaoService } from '../validacao.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() titulo: string;
  @Input() minimo = 0;
  @Input() maximo = 10;
  @Input() step = 1;

  constructor( public validacao: ValidacaoService) { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}