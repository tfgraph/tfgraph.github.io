import {Component, Input} from '@angular/core';
import {Link} from './../../shared/link';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.css']
})
export class SocialLinkComponent {


  @Input() link: Link;

  constructor() { }

}
