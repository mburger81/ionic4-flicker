import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gws: any[] = [
    {description: 'Lanthings ABC', serialNumber: 123456789},
    {description: 'Lanthings DEF', serialNumber: 468467956}
  ];


  public discover() {
    console.log('discover');
    this.gws = [
      {description: 'Lanthings ABC', serialNumber: 123456789},
      {description: 'Lanthings DEF', serialNumber: 468467956}
    ];
  }
}
