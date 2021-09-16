import React, { useState } from'react';
import { Text, View} from 'react-native';
import CampoInteiro from '../../../componentes/campoInteiro';
import Botao from '../../../componentes/Botao';

import estiloItem from './estiloItem';

export default function Item({nome,preco,Descricao}){
    const [Quantidade,setQuantidade] = useState(1)

    return<>
    <View style={estiloItem.informacao}>
        <Text style={estiloItem.nome}> {nome } </Text>
        <Text style={estiloItem.Descricao}> {Descricao }</Text>
        <Text style={estiloItem.preco}>  {preco } </Text>
    </View>
    <View style={estiloItem.carrinho}>
        <View>
            <View style={estiloItem.valor}>
                <Text style={estiloItem.Descricao}>Quantidade:</Text>
                <CampoInteiro valor ={Quantidade} acao = {setQuantidade}/>
            </View>
            <View style={estiloItem.valor}>
                <Text style={estiloItem.Descricao}>Preço:</Text>
                <Text style={estiloItem.preco}>0</Text>
            </View>  
        </View>
      
       <Botao valor='Adcionar' acao = {() => {}}/>
    </View>
    <View style={estiloItem.divisor}></View>
    </>

}