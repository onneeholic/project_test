import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  acceptnum: number = 0;
  checkcal: number = 0;
  res: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  OnlyNumbers(evt: any) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode == 46 && evt.srcElement.value.split('.').length > 1) {
      return false;
    }
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }

  cal() {
    this.acceptnum = this.acceptnum < 0 ? 1 : this.acceptnum;
    this.acceptnum = Number.isInteger(this.acceptnum)
      ? this.acceptnum
      : Math.round(this.acceptnum);
    console.log(this.acceptnum);
  }

  cal2() {
    console.log(this.acceptnum);
    if (this.checkcal == 1) {
      this.res = this.isPrime(this.acceptnum);
    } else {
      this.res = this.isFibonacci(this.acceptnum);
    }
  }

  isPrime(n: number) {
    // returns boolean
    for (var i = 2; i < n; i++) {
      // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
      if (n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
    }
    return n > 1;
  }

  isFibonacci(num: number) {
    if (num === 0 || num === 1) {
      return true;
    }
    let prev = 1;
    let count = 2;
    let temp = 0;
    while (count <= num) {
      if (prev + count === num) {
        return true;
      }
      temp = prev;
      prev = count;
      count += temp;
    }
    return false;
  }
}
