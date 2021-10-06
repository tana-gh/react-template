import * as React                   from 'react'
import * as Router                  from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as Mui                     from '@material-ui/core'
import IndexPage                    from './IndexPage'
import HelloPage                    from './HelloPage'
import NotFoundPage                 from './NotFoundPage'
import { State }                    from '../store/states'

export default (): React.FunctionComponentElement<void> => {
    const [ loading ] = useSelector((state: State) => [ state.mainReducer.loading ])
    const dispatch    = useDispatch()
    
    React.useEffect(() => {
        setTimeout(() => {
            dispatch({
                type   : 'SET_LOADING',
                payload: {
                    loading: false
                }
            })
        }, 1000)
    }, [])

    return (
        <Router.HashRouter basename="/" hashType="slash">
            <header>
                <Mui.AppBar position="fixed">
                    <Mui.Toolbar>
                        <Mui.Typography>
                            React Page
                        </Mui.Typography>
                    </Mui.Toolbar>
                </Mui.AppBar>
                <Mui.Toolbar/>
            </header>
            <main>
                {
                    loading
                    ? <Mui.CircularProgress/>
                    : <Router.Switch>
                        <Router.Route exact path="/">
                            <IndexPage/>
                        </Router.Route>
                        <Router.Route path="/hello">
                            <HelloPage/>
                        </Router.Route>
                        <Router.Route path="*">
                            <NotFoundPage/>
                        </Router.Route>
                    </Router.Switch>
                }
            </main>
        </Router.HashRouter>
    )
}
