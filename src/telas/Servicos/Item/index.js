import React from'react';
import { Text, TextInput, View } from 'react-native';
import estiloItem from './estiloItem';

export default function Item({nome,preco,Descricao}){
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
                <TextInput value='0'/>
            </View>
            <View style={estiloItem.valor}>
                <Text style={estiloItem.Descricao}>Preço:</Text>
                <Text style={estiloItem.preco}>0</Text>
            </View>  
        </View>
        <button title="Adcionar"/>
       <button>Adicionar</button>
    </View>
    </>

}