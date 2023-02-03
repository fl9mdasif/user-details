import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import UserDetails from './components/Users/UserDetails';
import Users from './components/Users/Users';

function App() {

  return (
    <div className="">
      {/* <p className="text-red-600">hi</p> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='/users' element={
          <Users />
        } />

        <Route path='/userDetails/:userID' element={
          <UserDetails />
        } />

      </Routes>

    </div>
  );
}

export default App;
