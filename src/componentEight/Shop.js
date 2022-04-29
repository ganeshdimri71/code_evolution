import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
    const { depositMoney, withDrawMoney } = bindActionCreators(actionCreators, dispatch);
    const amount = useSelector(state => state.amount)
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn btn-primary mx-2"
                onClick={() => depositMoney(50)}
            >+</button>
            Update Balance {amount}
            <button className="btn btn-primary mx-2"
                onClick={() => withDrawMoney(50)}
            >-</button>
        </div>
    )
}

export default Shop