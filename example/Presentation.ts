import { PresentationModel, IPresentationModel } from '../src'
import { IViewState } from './ViewState'

export interface IExamplePresentation extends IPresentationModel<IViewState> {
  doSomething: () => void
}

export class ExamplePresentation extends PresentationModel<IViewState> implements IExamplePresentation {
  doSomething() {
    this.model.setState({ enableSubmit: true })
  }
}
