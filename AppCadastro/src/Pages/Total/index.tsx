import { ReactNode, useEffect } from 'react';
import Header  from '../../Components/Header'
import { api } from '../../Services/api';

import { Container, Content, LabelStyle } from './styles';

interface TotalProps {
  id: string;
  line_number: string;
  chip_number: string;
  data_plan: string;
  account_number: string;
  company: string;

}
export function Total() {

  var telephone: TotalProps[] = [];

  async function loadTelephone() {
    const dataTelephone = await api.get('/telephoneline').then(dados => dados.data)

      if (dataTelephone){
        telephone = dataTelephone
          console.log(telephone.filter(tel=>tel.company === '889'))
      }


  }

  useEffect(() => {
    loadTelephone()
  },[])
    
  
  
  return (
    <Container>
      <Header/>
      
    

    </Container>
  );
};

export default Total;
