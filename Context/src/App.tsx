import { LanguageProvider } from "./context/LanguageContext.js";
import LanguageSwitcher from "./components/LanguageSwitcher.js";
import Greeting from "./components/Greeting.js";
import "./App.css";

const App = () => {
  return (
    <LanguageProvider>
      <Greeting />
      <LanguageSwitcher />
    </LanguageProvider>
  );
};

export default App;
