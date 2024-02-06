import { LoginForm } from "../../components/LoginForm";
import logo from "../../assets/logo.png";
export function Login() {
  
  return (
    <main>
      <div>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div >
        <div >
          <LoginForm/>
        </div>
      </div>
    </main>
  );
}
