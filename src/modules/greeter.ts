export interface IGreeter {
  greet(who: string): void;
}

export class Greeter implements IGreeter {
  public greet(who: string): void {
    console.info(`Saying hi to ${who}!`);
  }
}