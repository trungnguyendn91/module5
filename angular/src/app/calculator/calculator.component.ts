import { Component, OnInit } from '@angular/core';
import {ifError} from 'assert';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number ;
  num2: number;
  result: number;
  value: any;
  constructor() { }

  ngOnInit(): void {
  }
  Calculator(value: any) {
    switch (value) {
      case '+' :
        return this.result = (this.num1 + this.num2);
        break;
      case '-':
        return this.result = (this.num1 - this.num2);
        break;
      case '/':
        if (this.num2 === 0) {
          alert('Không thể chia cho 0!!!');
        } else {
          return this.result = (this.num1 / this.num2);
        }
        break;
      case '*':
        return this.result = (this.num1 * this.num2);
        break;
    }
  }
}
