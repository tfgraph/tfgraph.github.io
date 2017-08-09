import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.css']
})
export class SocialLinkComponent implements OnInit {


  @Input() icon: String;
  @Input() alt: String = "";
  @Input() url: String;
  constructor() { }

  ngOnInit() {
  }

}
