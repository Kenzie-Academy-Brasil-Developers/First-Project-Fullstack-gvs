import { LoginForm } from "../../components/LoginForm";
import logo from "../../assets/logo.png";
export function Login() {
  
  return (
    <main>
      <div >
        <div >
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <LoginForm/>
        </div>
      </div>
    </main>
  );
}
