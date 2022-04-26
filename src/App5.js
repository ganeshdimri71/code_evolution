import React from 'react'
import { Provider } from 'react-redux'
import HooksIceCreamContainer from './componentSeven/HooksIceCreamContainer'
import UsersContainer from './componentSeven/UsersContainer'
import store from './redux/store'

export default function App5() {
    return (
        <Provider store={store}>
            <div>
                <HooksIceCreamContainer />
            </div>
        </Provider>
    )
}



