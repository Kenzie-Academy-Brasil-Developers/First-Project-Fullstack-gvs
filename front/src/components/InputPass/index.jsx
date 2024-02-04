import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import style from "./style.module.scss";
export function InputPass({ error, label, register, disabled }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div >
      <label >{label}</label>
      <div >
        <input
          type={isHidden ? "password" : "text"}
          {...register}
          disabled={disabled}
          placeholder="Digite sua senha"
        />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </button>

      </div>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
}
