import { StateManager } from '../StateManager'

export interface IPresentationModel<T extends object> {
  model: StateManager<T>
}

export class PresentationModel<T extends object> implements IPresentationModel<T> {
  public model: StateManager<T>
  constructor(initialState: T) {
    this.model = new StateManager(initialState)
  }
}
