import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Home from '../Home/Home'
//import Biology from '../Biology/Biology'
//import Physics from '../Physics/Physics'
//import Chemistry from '../Chemistry/Chemistry'
//import BiologyAxes1 from '../BiologyAxes1/BiologyAxes1'
//import PhysicsAxes1 from '../PhysicsAxes1/PhysicsAxes1'
import Axes from '../Axes/Axes'
import Topics from '../Topics/Topics'
import NotFound from '../../components/NotFound/NotFound'

function App (){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/biologia" component={Axes}/>
                    <Route exact path="/fisica" component={Axes}/>
                    <Route exact path="/quimica" component={Axes}/>
                    <Route exact path="/fisica/1/propiedades" component ={Topics}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>    
        </BrowserRouter>
    )
}

export default App