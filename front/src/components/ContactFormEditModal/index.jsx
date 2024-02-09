import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/techContext";
import { InputTech } from "../InputTech";
import { SelectTech } from "../SelectTech";
import style from "./style.module.scss"

export function TechFormEditModal() {
  const { edited, editTech } = useContext(TechContext);
  const { register, handleSubmit } = useForm({
    values: {
      title: edited.title
    }
  });

  function submit(formData) {
    editTech(formData);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit(submit)}>
      <InputTech
        label="Nome"
        type="text"
        register={register("title")}
        disabled = {true}
      />

      <SelectTech label="Selecionar status" register={register("status")} />
      <button className={style.button}>Salvar alteracoes</button>
    </form>
  );
}
