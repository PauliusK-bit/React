import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Greeting = () => {
  const { language } = useContext(LanguageContext);

  return <h1>{language === "lt" ? "Labas, pasauli" : "Hello world"}</h1>;
};

export default Greeting;
