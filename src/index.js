/* @flow */
import React from 'react'
// $FlowFixMe
import { createRoot } from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

import App from './app'

library.add(faExchangeAlt)

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
