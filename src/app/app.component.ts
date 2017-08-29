import {Component} from '@angular/core';
import {Angulartics2GoogleAnalytics} from "angulartics2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'TFGraph';
  description: String = "This work consists of a study of a set of techniques and strategies related with algorithm's design, whose purpose is the resolution of problems on massive data sets, in an efficient way. This field is known as Algorithms for Big Data. In particular, this work has studied the Streaming Algorithms, which represents the basis of the data structures of sublinear order o(n) in space, known as Sketches. In addition, it has deepened in the study of problems applied to Graphs on the Semi-Streaming model. Next, the PageRank algorithm was analyzed as a concrete case study. Finally, the development of a library for the resolution of graph problems, implemented on the top of the intensive mathematical computation platform known as TensorFlow has been started.";
  inConstruction: boolean = true;

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  }

}
