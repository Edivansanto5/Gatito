import React from'react'
import { FlatList} from 'react-native';
import Item from './Item';
import TelaPadrao from '../../componentes/TelaPadrao';
import StatusCarrinho from '../../componentes/StatusCarrinho';

const servicos = [
    {
        id:1,
        nome:'Banho',
        preco:50,
        Descricao: 'Banho completo para seu pet com custo a beneficios',
        quantidade:1,

    },
    {
        id:2,
        nome:'Vacina v4',
        preco:200,
        Descricao: 'Vacinamos seu pet para ficar imune a varias doenças transmisiveis',
        quantidade:1,

    },
    {
        id:3,
        nome:'Vacina contra Raiva',
        preco:100,
        Descricao: 'A vacina mais importante, ela permitit deixar seu pet mais saudavel',
        quantidade:1,

    },
]
export default function Carrinho(){
    const total = servicos.reduce((soma,{preco,quantidade}) => soma + (preco * quantidade),0)
    return < TelaPadrao >
            <StatusCarrinho total = {total} />
            <FlatList
                data = {servicos}
                renderItem = {({ item })=> <Item {...item}/>}
                KeyExtractor = {({id}) => String (id)}
            />       
    </TelaPadrao>
}