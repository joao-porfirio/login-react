import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';
import img from "../../assets/img/image.svg";
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
          <label htmlFor="email">E-mail</label>
          <input class="formulario__field" type="email" id="email" name="email" placeholder="E-mail"/>
          <label htmlFor="senha">Senha</label>
          <input class="formulario__field" type="password" id="senha" name="senha" placeholder="Password"/>
          <article className="formulario__article">
            <div>
              <input type="checkbox" id="checkbox" />
              <label id="checkboxLabel" for="checkbox">Lembre de mim</label>
            </div>
            <div>
              <span id="forgotPassword">
                <a href="#">Esqueceu sua senha?</a>
              </span>
            </div>
          </article>
          <button class="formulario__enviar" type="submit">Entrar</button>
          <button class="formulario__login-google" type="button">Ou faça login com o Google </button>
        </form>

        <div>
          <span>Não tem uma conta? Cadastre-se</span>
        </div>
      </div>
    </header>
  )
}

export default Login
