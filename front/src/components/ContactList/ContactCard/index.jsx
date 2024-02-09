import style from "./style.module.scss";

export const ContactCard = ({contact}) => {
  return (
    <li >
      <div className={style.liContent}>
        <h3>{contact.completeName}</h3>
        <span>{contact.email}</span>
        <span>
          {contact.phone}
        </span>
        <span>{contact.registerData}</span>
        {/* <button className={style.button} onClick={() => addProduct(product)}>
          Adicionar
        </button> */}
      </div>
    </li>
  );
};
