import { IStateManager } from '../IStateManager'

export interface IPresentationModel<T extends object> {
  model: IStateManager<T>
}
