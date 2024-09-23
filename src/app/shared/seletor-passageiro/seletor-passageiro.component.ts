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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (value: number) => {}
  onTouch = () => {}

  writeValue(value: number): void {
    this.value = value;
  }
  registerOnChange(fn: (val: number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  setDisabledState?(): void {
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
