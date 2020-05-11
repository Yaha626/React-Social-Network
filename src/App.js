import React, { Component } from 'react';
import {Route, withRouter, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/Сommon/Preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert('Some error occured');

    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
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
                    <Switch>
                        <Route exact path='/'
                               render={()  => <Redirect to={'/profile'}/>} />
                               <Route path='/dialogs'
                        render={withSuspense(DialogsContainer)} />
                    <Route path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)} />
                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/login'
                        render={() => <LoginPage />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                        <Route path='*'
                               render={() => <div>404 NOT FOUND</div>} />
                </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

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
