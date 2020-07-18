import * as React  from 'react'
import * as Router from 'react-router-dom'
import * as Mui    from '@material-ui/core'
import * as Icons  from '@material-ui/icons'

export default (): React.FunctionComponentElement<void> => {
    const history = Router.useHistory()
    const onHelloButtonClick = React.useCallback(() => history.push('/hello'), [])

    return (
        <div>
            <Mui.Fab onClick={onHelloButtonClick}>
                <Icons.TouchApp/>
            </Mui.Fab>
        </div>
    )
}
