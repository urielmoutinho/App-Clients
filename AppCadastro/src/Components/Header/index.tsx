import { ReactNode } from 'react';
import { Container,Button } from './styles';


interface HeaderProps {

}

function Header() {
  return (
    <Container>
      <button className='cadastros'>Cadastro de usuários</button>
      <button className='cadastros'>Cadastro de linhas</button>
      <button className='cadastros'>Total de linhas</button>
      <Button>VIVO</Button>

    </Container>
  );
};

export default Header;
