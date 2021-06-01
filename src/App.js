import './App.css';
import React from 'react';
import Inbox from "./components/Inbox";
import Mailbox from "./components/Mailbox";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';
import Compose from './components/Compose';
import { UserProvider } from './components/GlobalContext/globalContext';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";

function App() {
  return (
    <UserProvider>
  
    <Router>
    <div className = "App" >
    
        <Route exact path="/Inbox" component={() => <Inbox />} />
        <Route exact path="/Compose" component={() => <Compose />} />
        <Route exact path="/Mailbox" component={() => <Mailbox />} />
      
        </div>
        </Router>
        </UserProvider>
  );
}

export default App;
