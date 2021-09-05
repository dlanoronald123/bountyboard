// import Login from './components/Login';
// import Register from './components/Register';
// import EditAccount from './components/EditAccount';
// import RequestBounty from './components/RequestBounty';
// import EditBounty from './components/EditBounty';
// import DashboardAdmin from './components/DashboardAdmin';
// import DashboardBounty from './components/DashboardBounty';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashboardHunter from './components/DashboardHunter';



function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <EditAccount /> */}
      {/* <RequestBounty /> */}
      {/* <EditBounty /> */}
      <Navbar/>
      <DashboardHunter />
      <Footer/>
    </>
  );
}

export default App;
