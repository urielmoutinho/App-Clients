import { ReactNode } from 'react';
import Header from '../../Components/Header';
import Linhas from '../../Components/Linhas';
import { Container } from './styles';


function Lines() {
  return (
    <Container>
      <Header/>
      <Linhas/>
    </Container>
  );
};

export default Lines;
