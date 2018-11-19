import { BehaviorSubject } from 'rxjs-compat/BehaviorSubject'
import { IStateManager } from '../../IStateManager'

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
