import "./login.css";
import { Logo } from "../../components/Logo";

export default function Login() {
  return (
    <div className="login-container">
      <Logo />

      <form className="form">
        <input type="email" placeholder="Digite seu e-mail..." />
        <input type="password" placeholder="******" autoComplete="on" />
        <button type="submit">Acessar</button>
      </form>
    </div>
  );
}
