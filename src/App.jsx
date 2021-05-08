import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import PanCake from "./pages/Pancake";
import Liquid from "./pages/Liquid";
import FooterPagePro from "./pages/footer";
import FooterPagePro2 from "./pages/FollowUs";
import ProjectsPage from "./pages/Telegram";
import Roadmap from "./pages/Roadmap";
import Contract from "./pages/Contract";
import TeamPage from "./pages/Story";

function App() {

  
  return (
    <div className="diva cloudy-knoxville-gradient color-block-4 rounded-circle z-depth-1-half">
      <Home />
      <TeamPage/>
      <ProjectsPage/>
      <PanCake/>
      <FooterPagePro2/>
      <Roadmap/>
      <Contract/>
      <FooterPagePro/>

      </div>
  )}
export default App;
