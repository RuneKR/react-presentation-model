import { StateManager } from '../StateManager'
import { IPresentationModel } from '../IPresentationModel'

export class PresentationModel<T extends object> implements IPresentationModel<T> {
  public model: StateManager<T>
  constructor(initialState: T) {
    this.model = new StateManager(initialState)
  }
}
