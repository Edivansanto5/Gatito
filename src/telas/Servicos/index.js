import React from'react'
import { FlatList,} from 'react-native';
import Item from '../Carrinho/Item';
import TelaPadrao from '../../componentes/TelaPadrao';

const servicos = [
    {
        id:1,
        nome:'Banho',
        preco:'',
        Descricao: 'Banho completo para seu pet com custo a beneficios',
        

    },
    {
        id:2,
        nome:'Vacina v4',
        preco:'',
        Descricao: 'Vacinamos seu pet para ficar imune a varias doenças transmisiveis',
        

    },
    {
        id:3,
        nome:'Vacina contra Raiva',
        preco:'',
        Descricao: 'A vacina mais importante, ela permitit deixar seu pet mais saudavel',
        

    },
]
export default function Servicos(){
    return < TelaPadrao >

            <FlatList
       
                data = {servicos}
                renderItem = {({ item })=> <Item {...item}/>}
                KeyExtractor = {({id}) => String (id)}
            />    
    </TelaPadrao>
}