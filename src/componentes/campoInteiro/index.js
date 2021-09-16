
import React from 'react';
import { TextInput } from 'react-native';
import estilosPadrao from './estiloCampoInteiro'

export default  function CampoInteiro({valor,estiloCampoInteiro,acao}){

const atualizar =  (novoValor,acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/);
    if(!verificaInteiro) return;

    const removeZeroaEsquerda = novoValor.replace(/^(0)(.+)/,'$2')
    acaoRetorno(removeZeroaEsquerda)
}
const numeroenTexto = String(valor)

    return <TextInput
    style={[estilosPadrao.campo,estiloCampoInteiro]}
    keyboardType = 'number-pad'
    selectTextOnFocus
    onChangeText = {(novoValor) => {atualizar(novoValor,acao)}}
    value = {numeroenTexto}
    
    />
}