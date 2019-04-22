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
                    <Route exact path="/biologia/:idSubject" component={Axes}/>
                    <Route exact path="/fisica/:idSubject" component={Axes}/>
                    <Route exact path="/quimica/:idSubject" component={Axes}/>
s
                    <Route exact path="/biologia/:idSubject/:idAxe" component={Content}/>
                    <Route exact path="/biologia/:idSubject/:idAxe" component={Content}/>
                    <Route exact path="/biologia/:idSubject/:idAxe" component={Content}/>

                    <Route exact path="/fisica/:idSubject/:idAxe" component={Content}/>
                    <Route exact path="/fisica/:idSubject/:idAxe" component={Content}/>
                    <Route exact path="/fisica/:idSubject/:idAxe" component={Content}/>

                    <Route exact path="/quimica/:idSubject/:idAxe" component={Content}/>
                    <Route exact path="/quimica/:idSubject/:idAxe" component={Content}/>
                    <Route exact path="/quimica/:idSubject/:idAxe" component={Content}/>

                    <Route exact path="/fisica/1/propiedades" component ={Topics}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>    
        </BrowserRouter>
    )
}

export default App