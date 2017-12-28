import { Component, Input } from '@angular/core';
import {Link} from "./../shared/link";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  @Input() linkList: Array<Link>;

  constructor() { }

}
