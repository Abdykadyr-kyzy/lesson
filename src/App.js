import React, { useState } from 'react';
import "./App.css"
import LoginForm from './components/LoginForm.js';
import {Header} from "./components/Header"
import ReactPlayer from "react-player"
import styled from 'styled-components'
import swal from "sweetalert"

function App() {
  const adminUser = {
    email: "Okuuit@gmail.com",
    password: "nomad2025"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const mostrarAlerta = () =>{
    swal({
            title: "Туура эмес",
            text: "Документти толук толтурунуз жана Парольду туура жазыныз!",
            icon: "error",
            button: "Макул"
    })
}

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
        console.log("Logged in");
        setUser({
          name:details.name,
          email:details.email,
        });
  } else{
        mostrarAlerta()
    }
  }
  
  
  const Logout = () => {
    setUser({name:"", email:"" });
  }         
 
  
  return (
    <div className="App">
        <Header/>
        <div className="log">
          {(user.email !="")?(
              <div className="welcome"> 
                <h1> Кош келдиңиз, <span>{user.name}</span></h1> 
                <button className="btn" onClick={Logout}>Чыгуу</button>        
                <br/>
                <div className="player"> 
                  <h3>#1-сабак. UX UI деген эмне?<br/> Киришүү сабак</h3>
                  <br/>
                  <iframe className="video"
                      src="https://www.youtube.com/embed/cm2OZ0OP-xg"
                      title="YouTube video player" frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                    </iframe>
                </div>
              </div>
            ):(
            <LoginForm Login={Login} error={error} />
            )}
        </div>
    </div>
  );}




export default App;

