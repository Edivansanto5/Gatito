import React, { useState } from'react';
import { Text, View,} from 'react-native';
import CampoInteiro from '../../../componentes/campoInteiro';
import Botao from '../../../componentes/Botao';

import estiloItem from './estiloItem';

export default function Item({nome,preco,Descricao,quantidade:quantidadeInicial}){
    const [Quantidade,setQuantidade] = useState(quantidadeInicial)
    const [total, setTotal] = useState(preco * quantidadeInicial)
 
    const atualizarQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calcularTotal(novaQuantidade);

    }
    const calcularTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco)
    }
    
    return<>
    <View style={estiloItem.informacao}>
        <Text style={estiloItem.nome}> {nome } </Text>
        <Text style={estiloItem.Descricao}> {Descricao }</Text>
        <Text style={estiloItem.preco}>  {Intl.NumberFormat('pt-br',
        {style:'currency',currency:'BRl'}).format(preco)} </Text>
    </View>
    
        <View style={estiloItem.carrinho}>
            <View>
                <View style={estiloItem.valor}>
                    <Text style={estiloItem.Descricao}>Quantidade:</Text>
                    <CampoInteiro valor ={Quantidade} acao = {atualizarQuantidadeTotal}/>
                </View>
                <View style={estiloItem.valor}>
                    <Text style={estiloItem.Descricao}>Total:</Text>
                    <Text style={estiloItem.preco}>{Intl.NumberFormat('pt-br',
                    {style:'currency',currency:'BRl'}).format(total)} </Text>
                </View>  
            </View>
            <Botao valor='Remover do Carrinho ' acao = {() => {}}/>
        </View>
    
    <View style={estiloItem.divisor}></View>
    </>

}