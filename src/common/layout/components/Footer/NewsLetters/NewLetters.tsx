import {
  NewsLettersText,
  NewsLettersTitle,
  NewsLettersInput,
  NewsLettersButton,
  NewsLettersContainer,
} from "./styled";
import Link from "next/link";

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
        required
      />
      <Link href={`/sign-up`}>
        <NewsLettersButton>Subscribirme</NewsLettersButton>
      </Link>
    </NewsLettersContainer>
  );
};

export default NewLetters;
