import {
  NewsLettersText,
  NewsLettersTitle,
  NewsLettersInput,
  NewsLettersButton,
  NewsLettersContainer,
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
        required
      />

      <NewsLettersButton>Subscribirme</NewsLettersButton>
    </NewsLettersContainer>
  );
};

export default NewLetters;
