import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  .Titulo-tabela{
      color:rgba(0,0,0);
      font-size: 32px;
      font-family: Radio Canada;
      align-items: center;
      justify-content: center;
      display: flex;
      margin-top:42px;
      margin-bottom:7px;

  }

  select{
    color: rgb(0,0,0);
    background: #fff;
    border: 0;
    height: 35px;
    width: 700px;
    border-radius: 5px;
    margin-top:12px;
    margin-bottom:12px;
    padding-left:7px;
    font-family: Radio Canada;



  }

`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;


  justify-content: center;

  align-items: center;

`;

export const Table = styled.table`
    display: flex;
    flex-direction:column;
    background:#e8e8e8;
    margin-top:57px;
    justify-content:center;

    thead{
      background:#e5e4e5;
      color:rgba(0,0,0);
      display: flex;
      align-items: center;
      font-family: Radio Canada;
      justify-content:space-evenly;
        th{ 
          gap:80px;
          max-width:350px;
          min-width:200px;
          height:27px;
          font-size:17px;
          margin:2px auto;
          font-family: Radio Canada;
        }

    }

    tbody{
      background:#e5e4e5;
      color:rgba(0,0,0);
      font-family: Radio Canada;
      display:block;
      padding-left:26px;

      td{
        justify-content:space-evenly;
        gap:50px;
        max-width:300px;
        min-width:200px;
        height:27px;
        font-size:17px;
        margin:2px auto;
        font-family: Radio Canada;
      }
      .itens{
        text-align: center;
        text-transform: capitalize;
      }
      .select_plans{
        text-align:center;
      }
      .itens_operator{
        text-align: center;
        text-transform: uppercase;
      }

    }



`;

export const Input = styled.input`
  color: rgb(0,0,0);
  background: #fff;
  border: 0;
  height: 35px;
  width: 700px;
  border-radius: 5px;
  margin-top:12px;
  margin-bottom:12px;
  padding-left:7px;
  font-family: Radio Canada;

`;

export const Button = styled.button`
  background: rgb(123 20 173);
  color: #e8e8e8;
  border-radius: 5px;
  width:250px;
  height:40px;
  border:0;
  font-size:17px;
  font-family: Radio Canada;
  margin-bottom:20px;


`;
export const ButtonIcon = styled.button`



`;
