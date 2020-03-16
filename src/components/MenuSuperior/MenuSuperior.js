import React, { Component } from "react";
import Logo from 'C:/Users/Breno_Lucas/Documents/ReactJSEstudos/singlepagereact/page/src/components/MenuSuperior/LogoSaude.png'
import './MenuSuperior.css';
class MenuSuperior extends Component{

    render(){
        return(
            <nav className="navbar fixed-top navbar-expand{-sm|-md|-lg|-xl} navbar-light bg-light shadow-sm pb-0 sidebar_background">
                
                <a href="/" className="navbar-brand">
                    <img src={Logo} width="40" height="40" alt=""></img>
                    <span class="navbar-brand h1 ml-2">DrogaCerta</span>
                </a>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* <ul className="navbar-nav mr-auto"></ul> */}
                    <div class="navbar-nav mr-auto">
                        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(Página atual)</span></a>
                        <a class="nav-item nav-link" href="#">Destaques</a>
                        <a class="nav-item nav-link" href="#">Preços</a>
                        <a class="nav-item nav-link disabled" href="#">Desativado</a>
                    </div>
                </div>  
            </nav>
        )
    }
}
export default MenuSuperior;