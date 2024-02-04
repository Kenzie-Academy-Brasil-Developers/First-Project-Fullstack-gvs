import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema.js";
import { InputPass } from "../InputPass";
import { Select } from "../Select";
import { useState } from "react";
import style from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/userContext";
export function RegisterForm() {
  const {userRegister} = useContext(UserContext)
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ 
    resolver: zodResolver(registerFormSchema),
  });
  
  function submit(formData) {
    userRegister(formData, setLoading);
  }
  return (
    <form  onSubmit={handleSubmit(submit)}>
      <div >
        <h1>Crie sua conta</h1>
        <p>Rapido e grátis, vamos nessa</p>
      </div>
      <Input
        label="Nome"
        type="text"
        register={register("completeName")}
        placeholder="Digite seu nome completo"
        error={errors.completeName}
      />
      <Input
        label="Email"
        type="email"
        register={register("email")}
        placeholder="Digite seu email"
        error={errors.email}
      />
      <InputPass
        label="Senha"
        register={register("password")}
        error={errors.password}
      />
      <Input
        label="Phone"
        register={register("phone")}
        error={errors.phone}
        placeholder="Phone number"
      />
      
      <button>
         "Cadastrar"
      </button>
    </form>
  );
}
