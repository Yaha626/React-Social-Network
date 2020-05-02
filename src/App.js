import React, { Component } from 'react';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
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
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/Сommon/Preloader/Preloader';
import store from './redux/redux-store';


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
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
                    <Route path='/dialogs'
                        render={() => <DialogsContainer />} />
                    <Route path='/profile/:userId?'
                        render={() => <ProfileContainer />} />
                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/login'
                        render={() => <LoginPage />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter >
        <Provider store={store}>
            < AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;