import React from 'react';
import NavMenu from './components/NavMenu';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom'
import ListView from './components/ListView'
import LeaveApplication from './components/LeaveApplication'
import Snackbar from '@material-ui/core/Snackbar';
import NotificationsHub from './components/NotificationsHub';



function renderSnackbar() {
  let display = true;
  return (() => {
    setImmediate(() => display = false, 2000)

    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={display}
        variant='success'
        onClose={() => { }}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">I love snacks</span>}
      />
    );

  })();


}

export default () => (
  <div>
    <BrowserRouter>
      <div>
        <Route path='/' component={NavMenu} />
        <Route path='/' exact component={ListView} />
        <Route path='/applyleave' exact component={LeaveApplication} />
      </div>
    </BrowserRouter>
    <NotificationsHub />
  </div>
);
