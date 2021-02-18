import React, { Component } from 'react'
import store from '../ReduxStore';


export default class ReduxPage extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate();
        })
    }

    add = () => {
        store.dispatch({ type: "ADD", payload: 2 })
    }

    render() {
        return (
            <div>
                <h3>Redux Page</h3>
                <div>{store.getState()}</div>
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}
