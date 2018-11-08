import React from 'react'
import { IExamplePresentationModel } from './PresentationModel'

export const View = (presenterModel: IExamplePresentationModel) => {

  return (
    presenterModel.model.state.enableSubmit ?
      <button onClick={presenterModel.doSomething}> Submit </button> : <div>Cannot submit</div>
  )
}