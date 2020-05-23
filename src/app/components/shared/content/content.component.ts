import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
  registerMode = false;

  constructor() { }

  ngOnInit(): void {
  }
  registerToggle(){
    this.registerMode = true;
  }
  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }
}
