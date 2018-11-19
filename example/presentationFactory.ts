import { IExamplePresentation, ExamplePresentation } from './Presentation'

export const presentationFactory = (): IExamplePresentation => (
  new ExamplePresentation({ enableSubmit: true })
)
