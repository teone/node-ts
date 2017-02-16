/// <reference path="../typings/index.d.ts" />

import {Greeter, IGreeter} from './modules/greeter';
class Main {
  constructor (public msg: string) {
    console.info(`Class Main instantiated with: ${msg}`)
  }

  public greet(who: string) {
    var greeter: IGreeter = new Greeter();
    greeter.greet(who);
  }
}

const app = new Main('Hello World!');

app.greet(process.env.LOGNAME);
