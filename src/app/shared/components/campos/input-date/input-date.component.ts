import { Component, OnInit, Input } from '@angular/core';
import { ValidacaoService } from '../validacao.service';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() titulo: string;

  constructor( public validacao: ValidacaoService) { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
