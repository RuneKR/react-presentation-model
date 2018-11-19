import React from 'react'
import { IExamplePresentation } from './Presentation'

export const View = (presenterModel: IExamplePresentation) => {

  return (
    presenterModel.model.state.enableSubmit ?
      <button onClick={presenterModel.doSomething}> Submit </button> : <div>Cannot submit</div>
  )
}