import { ContactCard } from "./ContactCard";
import style from "./style.module.scss";
export const ContactList = ({ contactList }) => {
  return (
    <section >
      <div>
        <ul>
          {contactList.map((contact) => (
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