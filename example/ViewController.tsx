import React from 'react'
import { createViewController } from '../src'
import { ExamplePresentationModel } from './PresentationModel'
import { View } from './View'

const presentationModelProvider = () => (
  new ExamplePresentationModel()
)

const ViewController = createViewController(presentationModelProvider)

export default () => (
  <ViewController render={View} />
)
