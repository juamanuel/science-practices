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
                    <Route exact path="/biologia" component={Axes}/>
                    <Route exact path="/fisica" component={Axes}/>
                    <Route exact path="/quimica" component={Axes}/>

                    <Route exact path="/biologia/materia" component={Content}/>
                    <Route exact path="/biologia/sistemas" component={Content}/>
                    <Route exact path="/biologia/diversidad" component={Content}/>

                    <Route exact path="/fisica/materia" component={Content}/>
                    <Route exact path="/fisica/sistemas" component={Content}/>
                    <Route exact path="/fisica/diversidad" component={Content}/>

                    <Route exact path="/quimica/materia" component={Content}/>
                    <Route exact path="/quimica/sistemas" component={Content}/>
                    <Route exact path="/quimica/diversidad" component={Content}/>
                    
                    <Route exact path="/fisica/1/propiedades" component ={Topics}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>    
        </BrowserRouter>
    )
}

export default App