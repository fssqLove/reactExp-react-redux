import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReactReduxPage extends Component {
    render() {
        console.log(this.props);
        const { state, add } = this.props

        return (
            <div>
                <h3>ReactReduxPage</h3>
                <div>{state}</div>
                <button onClick={() => add(1)}>btn</button>
            </div>
        )
    }
}

const mapStateToPropsParam = state => {
    return {
        state
    }
}

const mapDispatchToPropsParam = {
    add: (v) => {
        return { type: "ADD", payload: v }
    }
}

export default connect(
    mapStateToPropsParam, // 状态映射
    mapDispatchToPropsParam // 派发事件映射
)(ReactReduxPage);
