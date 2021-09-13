import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css']
})
export class MatematicoComponent implements OnInit {
  operationCheck:string;
  Userstring:string = "user"
  operation:string;
  number1:string;
  number2:string;
  Result:number;
  test = '9786'
  logged:boolean=true;
  Operations = ["Suma","Resta","Multiplicacion","Division"];
  today = new Date();

limpiaCajasEjecutado(){
  alert("Alguien disparo el evento limpia cajas");
}

  constructor() { }

 ChangeOperation(){
  this.operation = this.operationCheck;
  switch(this.operation){
    case "0":{
      this.Result = +this.number1 + +this.number2;
      console.log(this.Result);
      break;
    }
    case "1":{
      this.Result = +this.number1 - +this.number2;
      break;
    }
    case "2":{
      this.Result = +this.number1 * +this.number2;
      break;
    }
    case "3":{
      this.Result = +this.number1 / +this.number2;
      break;
    }
  }
 }


  ngOnInit(): void {
  }

}
