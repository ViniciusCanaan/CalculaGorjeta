import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.View`
flex: 1;
align-items:center;
`;


const HeaderText = styled.Text`
font-size: 25px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #EEE;
  margin-top:20px;
  border-radius:10px;
  padding: 10px;
`;

const CalcButton = styled.Button`
  margin-top: 10px;

`;

const ResultadoArea = styled.View`
width: 100%;
margin-top: 30px;
background-color: #eee;
padding: 20px;
justify-content: center;
align-items: center;
`;

const ItemResultadoTitulo = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultadoItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PctItem = styled.Button`

`;

export default function CalculaGorjeta() {

  const [conta, setConta] = useState('');
  const [gorjeta, setGorjeta] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nConta = parseFloat(conta);

    if (nConta) {
      setGorjeta(pct/100 *nConta);

    } else {
      alert('Digite o valor da conta');
    }

  }

  //se eu passar a array vazia, ele executa o componente ao abrir
  //Pct modificou? Faz a função calc novamente
  useEffect(()=>{
    calc();
  },[pct, conta]);

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Valor da conta"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={conta}
        onChangeText={n => setConta(n)}
      />

      <PctArea>
        <PctItem title="5%" onPress={() => setPct(5)} />
        <PctItem title="10%" onPress={() => setPct(10)} />
        <PctItem title="15%" onPress={() => setPct(15)} />
        <PctItem title="20%" onPress={() => setPct(20)}/>
      </PctArea>
      <CalcButton title={`Calcular ${pct}%`} onPress={calc} />
      {gorjeta > 0 &&

        <ResultadoArea>
          <ItemResultadoTitulo>Valor da Conta</ItemResultadoTitulo>
          <ResultadoItem>R$ {parseFloat(conta).toFixed(2)}</ResultadoItem>

          <ItemResultadoTitulo>Valor da Gorjeta</ItemResultadoTitulo>
          <ResultadoItem>R$ {gorjeta.toFixed(2)}({pct}%)</ResultadoItem>

          <ItemResultadoTitulo>Valor Total</ItemResultadoTitulo>
          <ResultadoItem>R$ {(parseFloat(conta) + gorjeta).toFixed(2)}</ResultadoItem>

        </ResultadoArea>
      }



    </Page>
  );
}