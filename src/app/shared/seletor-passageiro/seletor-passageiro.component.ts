import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrl: './seletor-passageiro.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor{
  @Input() passageiro: string = '';
  @Input() descricaoIdade: string = '';

  value: number = 0;
  onChange = (value: number) => {}
  onTouch = () => {}

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  decrementar(){
    if(this.value > 0){
      this.value--;
      this.onChange(this.value);
      this.onTouch();
    }
  }

  incrementar(){
    this.value++;
    this.onChange(this.value);
    this.onTouch();
  }
}
