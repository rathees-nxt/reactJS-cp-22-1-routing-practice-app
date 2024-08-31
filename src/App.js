import {Route, Switch} from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <div className="app-container">
      <div className="main-container">
        <Header />
        <div className="app-body">
          <Switch>
            <Route exact className="nav-link" path="/" component={Home} />
            <Route exact className="nav-link" path="/about" component={About} />
            <Route
              exact
              className="nav-link"
              path="/contact"
              component={Contact}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  </>
)

export default App
