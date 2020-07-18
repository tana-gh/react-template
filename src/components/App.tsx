import * as React  from 'react'
import * as Router from 'react-router-dom'
import * as Mui    from '@material-ui/core'
import RootPage    from './RootPage'
import HelloPage   from './HelloPage'

export default (): React.FunctionComponentElement<void> => {
    return (
        <Router.HashRouter basename="/" hashType="slash">
            <Mui.AppBar position="fixed">
                <Mui.Toolbar>
                    <Mui.Typography>
                        React Page
                    </Mui.Typography>
                </Mui.Toolbar>
            </Mui.AppBar>
            <Mui.Toolbar/>
            <Router.Switch>
                <Router.Route exact path="/">
                    <RootPage/>
                </Router.Route>
                <Router.Route exact path="/hello">
                    <HelloPage/>
                </Router.Route>
            </Router.Switch>
        </Router.HashRouter>
    )
}
