import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/techContext";
import { Input } from "../Input";
import { SelectTech } from "../SelectTech";
import { TechFormSchema } from "./TechFormSchema";
import style from "./style.module.scss"

export function TechFormModal(){
  const [loading, setLoading] = useState(false);
  const {postTech} = useContext(TechContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(TechFormSchema)
      });

      function submit(formData) {
         postTech(formData);
      }

    return(
        <form className={style.form} onSubmit={handleSubmit(submit)}>
           <Input
           label="Nome"
           type="text"
           register={register("title")}
           placeholder="Digite um titulo"
           error={errors.title}
           disabled={loading}/>

           <SelectTech
            label="Selecionar status"
            register={register("status")}
            disabled={loading}
           />
           <button className={style.button}>Cadastrar Tecnologia</button>
        </form>
    )
}