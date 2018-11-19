import React from 'react'
import { createViewController } from '../src'
import { presentationFactory } from './presentationFactory'
import { View } from './View'

const ViewController = createViewController(presentationFactory)

export default () => (
  <ViewController render={View} />
)
