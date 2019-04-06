import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-th-nav',
  templateUrl: './th-nav.component.html',
  styleUrls: ['./th-nav.component.css']
})
export class ThNavComponent implements OnInit {

  //todo: dodać template do wyswietlania nawigacji bez pozycji menu, tylko pozycje ma załadować na podsawie componentu shared

  constructor() { }

  ngOnInit() {
  }

}
