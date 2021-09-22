import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';
import img from "../../assets/img/image.svg";

import google from "../../assets/img/google-icon.png";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Login = () => {

  return (
    <header className="header">
      <div className="header__left">
      This will have content in the right box.
        <figure><img src={img} alt="" /></figure>
      </div> 
      <div className="header__right">
        <h4 className="header__saudacao">Bem vindo de volta</h4>
        <h3 className="header__titulo">Faça login na sua conta</h3>

        <form className="header__formulario .formulario"> 
          <label className="formulario__label" htmlFor="email">E-mail</label>
          <input class="formulario__field" type="email" id="email" name="email" placeholder="E-mail"/>
          <label className="formulario__label" htmlFor="senha">Senha</label>
          <input class="formulario__field" type="password" id="senha" name="senha" placeholder="Password"/>
          <article className="formulario__article">
            <div>
              <input type="checkbox" id="checkbox" />
              <label id="checkboxLabel" htmlFor="checkbox">Lembre de mim</label>
            </div>
            <div>
              <span id="forgotPassword">
                <a href="#">Esqueceu sua senha?</a>
              </span>
            </div>
          </article>
          <button className="formulario__enviar" type="submit">Entrar</button>
          <button className="formulario__login-google" type="button">Ou faça login com o Google </button>
        </form>

        <div className="header__right-cadastro">
          <span> Não tem uma conta? 
            <a className="header__right-link" href="#">Cadastre-se</a>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Login
