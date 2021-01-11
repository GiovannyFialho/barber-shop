import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import Sigin from '../Pages/Sigin'
import SiginUp from '../Pages/SiginUp'
import Dashboard from '../Pages/Dashboard'

const Routes:React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Sigin} />
            <Route path="/siginup" component={SiginUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    )
}

export default Routes
