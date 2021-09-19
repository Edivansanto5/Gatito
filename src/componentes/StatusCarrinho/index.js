import React from'react'
import { View ,Text} from 'react-native'
import estiloCarrinho from './estiloCarrinho'
import Botao from '../Botao'

export default function StatusCarrinho ({total}){
    return <View style = {estiloCarrinho.conteudo}>
        <View style = {estiloCarrinho.total}>
            <Text style = {estiloCarrinho.descricao}> Total do Carrinho</Text>
            <Text style = {estiloCarrinho.valor}>
                {
                    Intl.NumberFormat('pt-BR',{
                        style:'currency',currency:'BRL',
                    }).format(total)
                }

            </Text>

        </View>
        <View style = {estiloCarrinho.botao}>
            <Botao valor='Concluir Pedido' invertido> </Botao>

        </View>

    </View>
}