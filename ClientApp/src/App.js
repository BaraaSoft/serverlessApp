import React from 'react';
import NavMenu from './components/NavMenu';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom'
import ListView from './components/ListView'
import LeaveApplication from './components/LeaveApplication'


export default () => (
  <div>
    <BrowserRouter>
      <div>
        <Route path='/' component={NavMenu} />
        <Route path='/' exact component={ListView} />
        <Route path='/applyleave' exact component={LeaveApplication} />
      </div>
    </BrowserRouter>
  </div>
);
