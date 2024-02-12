import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { ContactList } from "../../components/ContactList";
import style from "./style.module.scss";
import { useContext } from "react";
import { contactContext } from "../../providers/contactContext";

export function Dashboard() {
  const {contacts} = useContext(contactContext)
  return (
    <main className={style.main}>
      <Header/>
      <div className={style.dashboard}>
        <section >
            <div>
              <ContactList contacts={contacts}/>
            </div>
            {/* <button onClick={() => postContact()}>Adicionar contato</button> */}
        </section>
        <Footer/>
      </div>
    </main>
  );
}