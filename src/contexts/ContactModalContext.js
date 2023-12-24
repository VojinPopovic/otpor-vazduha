import { createContext } from "react";
import { useState } from "react";

export const ContactContext = createContext();

export const ContactModalProvider = ({ children }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <ContactContext.Provider value={{ isContactOpen, setIsContactOpen }}>
      {children}
    </ContactContext.Provider>
  );
};
