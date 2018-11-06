import { PresentationModel } from '../src'

export interface ViewState {
  enableSubmit: boolean
}

export class ExamplePresentationModel extends PresentationModel<ViewState> {
  constructor() {
    super({ enableSubmit: true })
  }
  doSomething() {
    this.model.setState({ enableSubmit: true })
  }
}
