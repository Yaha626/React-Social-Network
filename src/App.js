import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
    return (
        <div className="app-wrapper" >
            <Header />
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/Dialogs'
                    render={() => <DialogsContainer />} />
                <Route path='/Profile'
                    render={() => <Profile />} />
                <Route path='/News' component={News} />
                <Route path='/Music' component={Music} />
                <Route path='/Settings' component={Settings} />
            </div>
        </div>
    )

}

export default App;
