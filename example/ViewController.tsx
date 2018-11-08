import React from 'react'
import { createViewController } from '../src'
import { presentationModelFactory } from './presentationModelFactory'
import { View } from './View'

const ViewController = createViewController(presentationModelFactory)

export default () => (
  <ViewController render={View} />
)
