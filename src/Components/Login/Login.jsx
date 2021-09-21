import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';
import img from "../../assets/img/image.svg";
const Login = () => {
  return (
    <header class="header">
      <div class="header__left">
      This will have content in the right box.
        <figure><img src={img} alt="" /></figure>
      </div>
      <div class="header__right">
        <h4>Bem vindo de volta</h4>
        <h3>Faça login na sua conta</h3>

        <label>E-mail</label>
        <input type="email" value="E-mail"/>
        <label>Senha</label>
        <input type="password" value="Password"/>
        <label for="checkbox"></label>
        <input type="checkbox" id="checkbox" />
        <button>Entrar</button>
        <button>Ou faça login com o Google </button>
      </div>
    </header>
  )
}

export default Login
