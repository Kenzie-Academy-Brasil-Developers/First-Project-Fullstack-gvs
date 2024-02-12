import { useContext } from "react";
import { ContactCard } from "./ContactCard";
import { contactContext } from "../../providers/contactContext";
export const ContactList = ({contacts}) => {
  return (
    <section>
      <div>
        <ul>
          {contacts?.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
            />
          ))}
          
        </ul>
      </div>
    </section>
  );
};