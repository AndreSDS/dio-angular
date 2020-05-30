import { Component, OnInit, Input } from '@angular/core';
import { ValidacaoService } from '../validacao.service';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() titulo: string;
  @Input() opcoes: Array<string>;

  constructor( public validacao: ValidacaoService) { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}