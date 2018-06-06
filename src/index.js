import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './stores/store'
import App from './components/index'

import './styles/index.css'

const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
                <App/>
        </ConnectedRouter>
    </Provider>,
    target
)