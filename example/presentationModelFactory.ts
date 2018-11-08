import { IExamplePresentationModel, ExamplePresentationModel } from './PresentationModel'

export const presentationModelFactory = (): IExamplePresentationModel => (
  new ExamplePresentationModel({ enableSubmit: true })
)
