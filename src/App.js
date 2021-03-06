import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Hooks
// import useAuthStatus from './hooks/useAuthStatus';
import { setUser } from './actions/auth';

// Components
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import UploadImage from './components/UploadImage';
// import ImageGallery from './components/ImageGallery';
// import ImageModal from './components/ImageModal';
// import Login from './components/Login';
// import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Routes from './routing/Routes';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  // const [user, setUser] = useState(null);

  // // listen for auth status changes
  // useAuthStatus(setUser);

  // Set User
  useEffect(() => {
    store.dispatch(setUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
      {/* <Landing selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> */}
      {/* <Fragment>
        {false ? (
          <Login />
        ) : (
          <Fragment>
            <Navbar />
            <div className='container'>
              <Header />
              <UploadImage />
              <ImageGallery setSelectedImg={setSelectedImg} />
              {selectedImg && (
                <ImageModal
                  selectedImg={selectedImg}
                  setSelectedImage={setSelectedImg}
                />
              )}
            </div>
          </Fragment>
        )}
      </Fragment> */}
    </Provider>
  );
};

export default App;
