import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer'
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/Сommon/Preloader/Preloader';
import { getAuthUserData } from './redux/auth-reducer';

class App extends Comment {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

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
                    <Route path='/Login'
                        render={() => <LoginPage />} />
                    <Route path='/News' component={News} />
                    <Route path='/Music' component={Music} />
                    <Route path='/Settings' component={Settings} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);
