import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: String;
  @Input() inConstruction: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
