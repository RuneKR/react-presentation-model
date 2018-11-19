import { Subscription } from 'rxjs-compat/Subscription'

export interface IStateManager<T extends object> {
  state: T
  subscribe: (observer: (state: T) => any) => Subscription
}
