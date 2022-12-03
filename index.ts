// Import stylesheets //cloned from https://www.learnrxjs.io/operators/combination/combinelatest.html
import './style.css';

import { timer, combineLatest } from 'rxjs';
import { Dialog } from '@angular/cdk/dialog';

//timerOne emits first value at 1s, then once every 4s
//using this timer to simulate user clicking
const timerOne = timer(1000, 1000);


timerOne.subscribe((r) => {

  


})
