import { call, ForkEffect, put, takeEvery } from 'redux-saga/effects'
import { Action, SendHello, ReceiveHello }  from './actions'

export function* saga(): Generator<ForkEffect<Action>, void> {
    yield takeEvery('SEND_HELLO'   , sendHello)
    yield takeEvery('RECEIVE_HELLO', receiveHello)
}

function* sendHello(action: Action) {
    yield put({
        type   : 'RECEIVE_HELLO',
        payload: {
            hello: (action as SendHello).payload.hello
        }
    })
}

function* receiveHello(action: Action) {
    yield put({
        type   : 'SET_HELLO_TEXT',
        payload: {
            helloText: (action as ReceiveHello).payload.hello
        }
    })
}
