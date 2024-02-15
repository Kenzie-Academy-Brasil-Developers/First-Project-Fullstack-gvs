import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { ContactList } from "../../components/ContactList";
import style from "./style.module.scss";
import { useContext } from "react";
import { contactContext } from "../../providers/contactContext";
import { CreateContactModal } from "../../components/ContactFormModal";
import { clientContext } from "../../providers/clientContext";

export function Dashboard() {
  const {contacts, setVisible, visible} = useContext(contactContext)
  const {client} = useContext(clientContext)
  
  return (
    <>
      {client && (
        <main className={style.main}>
        <Header/>
        <div className={style.dashboard}>
          <section >
              <div>
                <ContactList contacts={contacts}/>
              </div>
              <button className={style.buttonAdd} onClick={() => setVisible(true)}>Adicionar contato</button>
              {visible ? <CreateContactModal/> : null} 
          </section>
          <Footer/>
        </div>
      </main>
      )}
    </>
  );
}


