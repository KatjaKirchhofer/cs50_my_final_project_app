import {Dictionary} from "../types/Dictionary";

const dictionaryDe: Dictionary = {
  dailyEntry: "Mein täglicher Eintrag",
  mySuccess: "Meine Erfolge",
  questionGoodYesterday: "Was habe ich gestern gut gemacht?",
  first: "1.",
  second: "2.",
  third: "3.",
  save: "Speichern",
  settings: "Einstellungen",
  changeLanguage: "Sprache ändern",
  register: "Registrieren",
  name: "Name",
  enterName: "Dein Name",
  password: "Passwort",
  repPassword: "Passwort wiederholen",
}

const dictionaryEN: Dictionary = {
  dailyEntry: "My daily Entry",
  mySuccess: "My Success",
  questionGoodYesterday: "Where did I succeed yesterday?",
  first: "1rst",
  second: "2cnd",
  third: "3rd",
  save: "Save",
  settings: "ajustes",
  changeLanguage: "Change Language",
  register: "register",
  name: "nombre",
  enterName: "your name",
  password: "password",
  repPassword: "repeat password",
}

const dictionaryEs: Dictionary = {
  dailyEntry: "entrada diaria",
  mySuccess: "mis logros",
  questionGoodYesterday: "¿Qué hice bien ayer?",
  first: "1.",
  second: "2.",
  third: "3.",
  save: "Guardar en la computadora",
  settings: "Settings",
  changeLanguage: "cambiar idioma",
  register: "registrarse",
  name: "nombre",
  enterName: "su nombre",
  password: "clave",
  repPassword: "repite la contraseña",
}

export const returnDictionary = () => {
  return dictionary;
}

export const dictionary: Dictionary = returnDictionary()



