import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {Routes,Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = (props) => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element={  <DialogsContainer store={props.store} /> }/>

                        <Route path='/profile/:userId'
                               element={ <ProfileContainer store={props.store} /> }/>
                        <Route path='/users'
                        element={ <UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        )
}

export default App;