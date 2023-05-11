import { Button, Text, CSS } from "@nextui-org/react";
import {
  NewsLettersButton,
  NewsLettersContainer,
  NewsLettersInput,
  NewsLettersText,
  NewsLettersTitle,
} from "./styled";

const NewLetters = () => {
  return (
    <NewsLettersContainer>
      <NewsLettersTitle>Boletín Informativo</NewsLettersTitle>

      <NewsLettersText>
        Recibe en tu bandeja de correo la última información sobre carros,
        partes y accesorios. Mantente al día con nuestro boletín.
      </NewsLettersText>

      <NewsLettersInput
        type="text"
        placeholder="Ingresa tu correo electrónico"
      />

      <NewsLettersButton>Subscribirme</NewsLettersButton>
    </NewsLettersContainer>
  );
};

export default NewLetters;
