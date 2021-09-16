import React, { useState } from'react';
import { Text, View,TouchableOpacity} from 'react-native';
import CampoInteiro from '../../../componentes/campoInteiro';
import Botao from '../../../componentes/Botao';

import estiloItem from './estiloItem';

export default function Item({nome,preco,Descricao}){
    const [Quantidade,setQuantidade] = useState(1)
    const [total, setTotal] = useState(preco)
    const [expandir,setExpandir] = useState(false)
    const atualizarQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calcularTotal(novaQuantidade);

    }
    const calcularTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco)
    }
    const inverteExpandir = () => {
        setExpandir(!expandir)
        atualizarQuantidadeTotal(1)
    }
    return<>
    <TouchableOpacity style={estiloItem.informacao} onPress={inverteExpandir}>
        <Text style={estiloItem.nome}> {nome } </Text>
        <Text style={estiloItem.Descricao}> {Descricao }</Text>
        <Text style={estiloItem.preco}>  {Intl.NumberFormat('pt-br',
        {style:'currency',currency:'BRl'}).format(preco)} </Text>
    </TouchableOpacity>
    {expandir &&
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
            <Botao valor='Adcionar' acao = {() => {}}/>
        </View>
    }
    <View style={estiloItem.divisor}></View>
    </>

}