import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.css'
})
export class DropdownUfComponent implements OnInit{
  @Input() label: string = '';
  @Input() matPrefix: string = '';
  @Input() placeholder: string = '';

  ngOnInit(): void {
    
  }
  
}
