import { PresentationModel, IPresentationModel } from '../src'
import { IViewState } from './ViewState'

export interface IExamplePresentationModel extends IPresentationModel<IViewState> {
  doSomething: () => void
}

export class ExamplePresentationModel extends PresentationModel<IViewState> implements IExamplePresentationModel {
  doSomething() {
    this.model.setState({ enableSubmit: true })
  }
}
