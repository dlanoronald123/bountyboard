// import Login from './components/Login';
// import Register from './components/Register';
// import EditAccount from './components/EditAccount';
// import RequestBounty from './components/RequestBounty';
// import EditBounty from './components/EditBounty';
// import DashboardAdmin from './components/DashboardAdmin';
// import DashboardBounty from './components/DashboardBounty';

import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EditAccount from './components/EditAccount';
import EditBounty from './components/EditBounty';
import RequestBounty from './components/RequestBounty';
import DashboardBounty from './components/DashboardBounty';
import DashboardHunter from './components/DashboardHunter';
import DashboardAdmin from './components/DashboardAdmin';
import {Route, BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <EditAccount /> */}
      {/* <RequestBounty /> */}
      {/* <EditBounty /> */}
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" component={Register}/>
      <Route path="/hunter" component={Navbar}/>
      <Route path="/hunter" component={DashboardHunter}/>
      <Route path="/hunter" component={Footer}/>
      <Route path="/bounty" component={Navbar}/>
      <Route path="/bounty" component={DashboardBounty}/>
      <Route path="/bounty" component={Footer}/>
      <Route path="/admin" component={Navbar}/>
      <Route path="/admin" component={DashboardAdmin}/>
      <Route path="/admin" component={Footer}/>
      <Route path="/requestbounty" exact component={RequestBounty}/>
      <Route path="/editbounty" exact component={EditBounty}/>
      <Route path="/editaccount" exact component={EditAccount}/>
    </Router>
  );
}

export default App;
