import React from 'react'
import Header from './component/header'
import Footer from './component/footer'
import "./main.css"
import $ from 'jquery';
import Cyron from './screen/cyron'
import Service from './screen/service'
import Career from './screen/career'
import About from './screen/about'
import Course from './screen/course'
import Login from './screen/login'
import Contact from './screen/contact'
import Terms from './screen/terms'
import Policies from './screen/policies'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Cyron} />
                    <Route exact path="/service" component={Service} />
                    <Route exact path="/career" component={Career} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/course" component={Course} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/terms" component={Terms} />
                    <Route exact path="/policies" component={Policies} />
                    <Route exact path="/login" component={Login} />

                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App
