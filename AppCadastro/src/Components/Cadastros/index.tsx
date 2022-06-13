import { ReactNode } from "react";
import {api} from '../../Services/api'
import { Container, Form, Table, ButtonIcon, Input, Button } from './styles';
import { useState, FormEvent, useEffect} from 'react';
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'

interface DashboardProps {
  id:string;
  cpf:string;
  name:string;
  sector:string;
  company:string;

}

function Cadastros() {
  const [cpf, setCpf] = useState('')
  const [sector, setSetor] = useState('')
  const [company, setEmpresa] = useState('')
  const [name, setNomeusuario] = useState('')
  const [dataClients, setDataClients] = useState<DashboardProps[]>([])
  const [status, setStatus] = useState('Adding')

  async function HandleAddClient(event: FormEvent){
    event.preventDefault();
    const client = {
      cpf,
      name,
      sector,
      company
    }
    if (status === 'Adding'){
      const { id } = await api.post('/users',client).then(dados=> dados.data)
      setDataClients([...dataClients,{id,cpf,sector,name,company}]);

   }else{
      await api.put(`/users/${status}`, client)
   }
   setCpf('');
   setNomeusuario('');
   setSetor('');
   setEmpresa('');

   setStatus('Adding');
  } 
    async function HandleUpdateClient(id:string){
      const Alter = await api.get(`/users/${id}`).then(Return => Return.data)
      setCpf(Alter.cpf);
      setNomeusuario(Alter.name);
      setSetor(Alter.sector);
      setEmpresa(Alter.company);
      setStatus(id);
    
    }

    async function HandleDeleteClient(id: string){
      setDataClients(dataClients.filter(cli => cli.id !== id))
      await api.delete(`/users/${id}`);
    }
    async function loadClientes(){
    const dadosClients = await api.get('/users').then(dados => dados.data);
    
    console.log(dadosClients);
    setDataClients(dadosClients)

  }

  useEffect(()=>{
    loadClientes()
  },[])




  return (
    <Container>
        <div className="Titulo-tabela">
        <a>Cadastro de Usuários</a>
        </div>

        <Form onSubmit={HandleAddClient}>    

          <Input onChange = {event => setCpf(event.target.value)}
          value={cpf}
          placeholder="CPF"/>
  
          <Input onChange = {event => setNomeusuario(event.target.value)}
          value={name}
          placeholder="Nome de Usuário"/>
  
          <Input onChange = {event => setSetor(event.target.value)}
          value={sector}
          placeholder="Setor"/>  

          <Input onChange = {event => setEmpresa(event.target.value)}
          value={company}
          placeholder="Empresa"/>
          
          <Button type='submit' >
            Cadastrar
          </Button>  
        </Form>

      <Table>
        <thead>
          <tr>
          <th>CPF</th>
          <th>Nome Usuário</th>
          <th>Setor</th>
          <th>Empresa</th>
          <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dataClients.map((cli)=>(          
          <tr key={cli.id}>
            <td className="itens">{cli.cpf}</td>
            <td className="itens">{cli.name}</td>
            <td className="itens">{cli.sector}</td>
            <td className="itens-company">{cli.company}</td>
            <td className="itens">
              <ButtonIcon onClick = {() => HandleDeleteClient(cli.id)} type="button">
                <AiOutlineDelete size={28}/>
              </ButtonIcon>          
              <ButtonIcon onClick={()=>HandleUpdateClient(cli.id)} type="button">
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
export default Cadastros;
