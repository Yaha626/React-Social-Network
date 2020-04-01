import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';




const App = (props) => {



    return <BrowserRouter>
        <div className="app-wrapper" >
            <Header />
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/Dialogs'
                    render={() => <Dialogs
                        store={props.store}
                        state={props.state.dialogsPage}
                    />} />
                <Route path='/Profile'
                    render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />} />
                <Route path='/News' component={News} />
                <Route path='/Music' component={Music} />
                <Route path='/Settings' component={Settings} />
            </div>
        </div>
    </BrowserRouter>

}

export default App;
