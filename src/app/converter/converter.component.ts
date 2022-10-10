import { Component, OnInit } from '@angular/core';
import {CurrencyExchangeService} from '../services/exchange-rates.service'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount = 1;
  from = 'CAD';
  to   = 'USD';
  rate = 0.74;

  convert(): number{

    return this.amount * this.rate;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
