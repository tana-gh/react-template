import * as React  from 'react'
import * as Router from 'react-router-dom'
import * as Mui    from '@material-ui/core'
import RootPage    from './RootPage'
import HelloPage   from './HelloPage'

export default () => {
    return (
        <Router.HashRouter basename="/" hashType="slash">
            <div>
                <Mui.AppBar position="sticky">
                    <Mui.Toolbar>
                        <Mui.Typography>
                            React Page
                        </Mui.Typography>
                    </Mui.Toolbar>
                </Mui.AppBar>
            </div>
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
