import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Hello from "./components/Hello/Hello";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {


   return (
   <BrowserRouter>
      <div className="app-wrapper">
         <Header/>
         <Navbar/>
         <div className="app-wrapper-content">
            <Routes>
               <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
               <Route path='/profile' element={<Profile posts={props.posts}/>}/>
               <Route path='/Music' element={<Music/>}/>
               <Route path='/News' element={<News/>}/>
               <Route path='/Settings' element={<Settings/>}/>
               <Route path='/Hello' element={<Hello/>}/>
            </Routes>
         </div>
      </div>
   </BrowserRouter>
   );
};

export default App;
