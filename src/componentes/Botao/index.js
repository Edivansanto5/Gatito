import React from'react';
import { TouchableOpacity ,Text} from 'react-native';
import funcaoEstiloPadrao from'./estiloBotao'

export default function Botao ({pequeno = false,invertido = false, valor,acao,estiloBotao}){
    const estiloPadrao = funcaoEstiloPadrao(pequeno,invertido)
    
    return <TouchableOpacity onPress= {acao} style={[estiloPadrao.Botao,estiloBotao]}>
        <Text style = {estiloPadrao.valor}>{valor}</Text>
    </TouchableOpacity>

}