
import React from 'react';
import { TextInput } from 'react-native';

export default  function CampoInteiro({valor,acao}){

const atualizar =  (novoValor,acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/);
    if(!verificaInteiro) return;

    const removeZeroaEsquerda = novoValor.replace(/^(0)(.+)/,'$2')
    acaoRetorno(removeZeroaEsquerda)
}
const numeroenTexto = String(valor)

    return <TextInput
    keyboardType = 'number-pad'
    selectTextOnFocus
    onChangeText = {(novoValor) => {atualizar(novoValor,acao)}}
    value = {numeroenTexto}
    
    />
}