import { useEffect, useState } from "react";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { ContactList } from "../../components/ContactList";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { clientContext } from "../../providers/clientContext";

import style from "./style.module.scss";
export function Dashboard() {
  const {client} = useContext(clientContext)

  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
  const localStorageContacts = localStorage.getItem("@CONTACTSLIST")
  //const clientToOneLetter = client.completeName.charAt(0)
  async function getContactsList() {
    try {
      const { data } = await api.get("/contact");
      setContacts(data);
    } catch (error) {
      toast.error(error);
    }
  }
  const token = localStorage.getItem('@TOKEN')
  useEffect(() => {
    if(!token){
        navigate('/')
    }
    getContactsList();
  }, [token]);
  useEffect(() => {
    localStorage.setItem("@CONTACTSLIST", JSON.stringify(contacts));
  }, [contacts]);

  
  return (
    <main className={style.main}>
      <Header/>
      <div className={style.dashboard}>
        <section >
            <div>
              <ContactList contactList={contacts}/>
            </div>
        </section>
        <Footer/>
      </div>
    </main>
  );
}