import { useDispatch } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispath = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispath(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      Login
      <Title>Lorem </Title>
      <button type="submit" onClick={handleClick}>
        salvar
      </button>
    </Container>
  );
}
