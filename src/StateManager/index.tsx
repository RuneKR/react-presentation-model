import { BehaviorSubject } from 'rxjs-compat/BehaviorSubject'
import { Subscription } from 'rxjs-compat/Subscription'

export interface IStateManager<T extends object> {
  state: T
  subscribe: (observer: (state: T) => any) => Subscription
}

export class StateManager<T extends object> implements IStateManager<T> {
  protected subject: BehaviorSubject<T>
  constructor(initialState: T) {
    this.subject = new BehaviorSubject(initialState)
  }
  get state(): T {
    return this.subject.value
  }
  public setState(nextStateProps: Partial<T>): void {
    this.subject.next({
      ...this.state as object,
      ...nextStateProps as object
    } as T)
  }
  public subscribe(observer: (state: T) => any) {
    return this.subject.subscribe(observer)
  }
}
