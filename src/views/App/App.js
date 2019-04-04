import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../Home/Home'
import Biologia from '../Biologia/Biologia'
import Fisica from '../Fisica/Fisica'
import Quimica from '../Quimica/Quimica'


function App (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/biologia" component={Biologia}/>
                <Route exact path="/fisica" component={Fisica}/>
                <Route exact path="/quimica" component={Quimica}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App