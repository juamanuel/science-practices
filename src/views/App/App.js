import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Home from '../Home/Home'
import Axes from '../Axes/Axes'
import Content from '../Content/Content'
import Topics from '../Topics/Topics'
import NotFound from '../../components/NotFound/NotFound'

function App (){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:idSubject" component={Axes}/>
                    <Route exact path="/:idSubject/:idAxe" component={Content}/>
                    <Route  path="/:idSubject/:idAxe/:idContent" component ={Topics}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>    
        </BrowserRouter>
    )
}

export default App