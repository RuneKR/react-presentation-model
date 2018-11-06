import React from 'react'
import { ExamplePresentationModel } from './PresentationModel'

export const View = (presenterModel: ExamplePresentationModel) => (
  presenterModel.model.state.enableSubmit ?
    <button onClick={presenterModel.doSomething}> Submit </button> : <div>Cannot submit</div>
)
