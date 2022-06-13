import {api} from '../../Services/api'
import { useState, FormEvent, useEffect} from 'react';
import { Container, Form, Table, Input, Button, ButtonIcon } from './styles';
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'


interface LinesProps {
  line_number: string;
  chip_number: string;
  id: string;
  data_plan: string;
  account_number: string;
  telephone_operator: string;

}


function Lines() {
  const [line_number, setLine_number] = useState('')
  const [chip_number, setChip_number] = useState('')
  const [data_plan, setData_plan] = useState('')
  const [account_number, setAccount_number] = useState('')
  const [telephone_operator, setTelephone_operator] = useState('')
  const [datalines, setDatalines] = useState<LinesProps[]>([])
  const [status, setStatus] = useState('Adding')


  async function HandleAddLines(event: FormEvent){
    event.preventDefault();
    const lines = {
      line_number,
      chip_number,
      data_plan,
      account_number,
      telephone_operator,
    }
    if (status === 'Adding'){
      const { id } = await api.post('/telephoneline/',lines).then(dados=> dados.data)
      setDatalines([...datalines,{id,line_number,chip_number,data_plan,account_number,telephone_operator}]);

   }else{
      await api.put(`/telephoneline/${status}`, lines)
   }
   setLine_number('');
   setChip_number('');
   setData_plan('');
   setAccount_number('');
   setTelephone_operator('');
   setStatus('Adding');
  } 
    async function HandleUpdateLines(id:string){
      const Alter = await api.get(`/telephoneline/${id}`).then(Return => Return.data)
      setLine_number(Alter.line_number);
      setChip_number(Alter.chip_number);
      setData_plan(Alter.data_plan);
      setAccount_number(Alter.account_number);
      setTelephone_operator(Alter.telephone_operator);
      setStatus(id);

    
    }

    async function HandleDeleteLines(id: string){
      setDatalines(datalines.filter(line => line.id !== id))
      await api.delete(`/telephoneline/${id}`);
    }
    async function loadlines(){
    const dadoslines = await api.get('/telephoneline').then(dados => dados.data);
    
    console.log(dadoslines);
    setDatalines(dadoslines)

  }

  useEffect(()=>{
    loadlines()
  },[])


  return (
    <Container>
      
      <div className="Titulo-tabela">
        <a>Cadastro De Linhas</a>
      </div>

        <Form onSubmit={HandleAddLines}>    

          <Input onChange = {event => setLine_number(event.target.value)}
          value={line_number}
          placeholder="Número da Linha"/>
  
          <Input onChange = {event => setChip_number(event.target.value)}
          value={chip_number}
          placeholder="Número do Chip"/>
  
          <select
            name="data_plan"
            value={data_plan}
            onChange={(event) => setData_plan(event.target.value)}
          >
            <option value=""></option>
            <option value="20GB">20GB</option>
            <option value="30GB">30GB</option>
          </select>

          <Input onChange = {event => setAccount_number(event.target.value)}
          value={account_number}
          placeholder="Numero da Conta"/>

          <Input onChange = {event => setTelephone_operator(event.target.value)}
          value={telephone_operator}
          placeholder="Operadora"/>

          
          <Button type='submit' >
            Cadastrar
          </Button>  
        </Form>

      <Table>
        <thead>
          <tr>
          <th>Número da Linha</th>
          <th>Número do Chip</th>
          <th>Plano de dados</th>
          <th>Numero da Conta</th>
          <th>Oporadora</th>
          <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {datalines.map((lines)=>(          
          <tr key={lines.id}>
            <td className="itens">{lines.line_number}</td>
            <td className="itens">{lines.chip_number}</td>
            <td className="select_plans">{lines.data_plan}</td>
            <td className="itens">{lines.account_number}</td>
            <td className="itens_operator">{lines.telephone_operator}</td>
            <td className="itens">
              <ButtonIcon onClick = {() => HandleDeleteLines(lines.id)} type="button">
                <AiOutlineDelete size={28}/>
              </ButtonIcon>          
              <ButtonIcon onClick={()=>HandleUpdateLines(lines.id)} type="button">
                <AiOutlineEdit size={28}/>
              </ButtonIcon>
            </td>
          </tr>
          ))}
        </tbody>
      </Table>
  
    </Container>
  );
};

export default Lines;
