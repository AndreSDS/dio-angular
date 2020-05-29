import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidacaoService } from '../validacao.service';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css']
})
export class InputTextAreaComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() titulo: string;

  constructor( private validacao: ValidacaoService) { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
