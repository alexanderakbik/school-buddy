// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    login: 'Login',
    usernameEmail: 'Username/Email',
    password: 'Password',
    dontHaveAccount: "Don't have an account? Signup"
  },
  de: {
    login: 'Anmelden',
    usernameEmail: 'Benutzername/E-Mail',
    password: 'Passwort',
    dontHaveAccount: 'Kein Konto? Registrieren'
  },
  lv: {
    login: 'Pieteikties',
    usernameEmail: 'Lietotājvārds/E-pasts',
    password: 'Parole',
    dontHaveAccount: 'Nav konta? Reģistrējieties'
  }
  // Add other languages here
};

const i18n = createI18n({
  locale: 'en', // default locale
  fallbackLocale: 'en', // fallback locale
  messages, // set locale messages
});

export default i18n;
