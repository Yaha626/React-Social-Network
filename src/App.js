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

    let posts = [
        { ID: 1, message: 'Hi chuvack', likesCount: 12 },
        { ID: 1, message: 'Hi', likesCount: 42 },
        { ID: 1, message: 'Hi chuvack', likesCount: 1 },
        { ID: 1, message: 'yoyo', likesCount: 19 },
        { ID: 1, message: 'olala ', likesCount: 12 }
    ]

    return <BrowserRouter>
        <div className="app-wrapper" >
            <Header />
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' render={  () => Dialogs} />
                <Route path='/Profile' render={  () => <Profile posts={posts} /> }/>
                <Route path='/News' component={News} />
                <Route path='/Music' component={Music} />
                <Route path='/Settings' component={Settings} />
            </div>
        </div>
    </BrowserRouter>

}

export default App;
