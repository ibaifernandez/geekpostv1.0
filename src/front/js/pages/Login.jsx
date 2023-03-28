import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { Navigate, Link, useNavigate } from "react-router-dom";
//import "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css";
//import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
//import "https://fonts.googleapis.com/css?family=Didact+Gothic|Lobster&amp;subset=latin-ext"


export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (email === "" || password === "") {
        alert("Enter all the required information");
      } else {
        const isAuth = await actions.fetchCredentials( {email, password} );
        isAuth ? navigate("/home") : null;
      }
    };

 
  
    return (
      <div className="fondo" id="fondo">
        <div className="container row login-box" >
          <div className="  recuadro login-title">
            <h1 className="h1login">Que quieres crear hoy?</h1>
            <span className="small-text">Empecemos!</span>
          </div>
          <div className=" col recuadro login-form ">
            <div className="avatar ">
            </div>
            <div className="registration">Necesitas una cuenta?
              <Link to="/signup" className="alink">{" "} Regístrate
              </Link>
            </div>
            <form action="" method="POST" >
              <label htmlFor="login" className="login labellogin validationCustom01">
                <input id="login" type="email" 
                className=" inputlogin"
                placeholder="Usuario" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />
              </label>
              <label htmlFor="passwd" className="passwd  labellogin">
                <input id="passwd" type="password" placeholder="Password" className="inputlogin"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <p className="required"></p>
              </label>
              <button className="buttonlogin" type="submit" onClick={handleSubmit} >Entrar</button>
            </form>
            <div className="lost-passwd">
              <a href="#" className="alink">Olvidaste tu password?</a>
            </div>
          </div>
        </div>
      </div>  
    );
  };
  