import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return <button onClick={toggleLanguage}>Keisti kalbą</button>;
};

export default LanguageSwitcher;
