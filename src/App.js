import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer'

const App = () => {

    return (
        <div className="app-wrapper" >
            <HeaderContainer />
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/Dialogs'
                    render={() => <DialogsContainer />} />
                <Route path='/Profile/:UserId?'
                    render={() => <ProfileContainer />} />
                <Route path='/Users'
                    render={() => <UsersContainer />} />
                <Route path='/News' component={News} />
                <Route path='/Music' component={Music} />
                <Route path='/Settings' component={Settings} />
            </div>
        </div>
    )

}

export default App;
