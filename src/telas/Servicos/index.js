import React from'react'
import { FlatList, Keyboard, SafeAreaView,StatusBar,Text } from 'react-native'


 const servicos = [
    {
        id:1,
        nome:'Banho',
        preco:59.90,
        Descricao: 'Banho completo para seu pet com custo a beneficios'

    },
    {
        id:2,
        nome:'Vacina v4',
        preco:159.90,
        Descricao: 'Vacinamos seu pet para ficar imune a varias doenças tranmitiveis'

    },
    {
        id:3,
        nome:'Vacina contra Raiva',
        preco:259.90,
        Descricao: 'A vacina mais importante, ela permitit deixar seu pet mais saudavel'

    },
]
export default function Servicos(){
    return < SafeAreaView >
            <StatusBar/>
            <Text>Serviços Disponiveis</Text>
            <FlatList
            data = {servicos}
            renderItem = {({item: {nome}})=> <Text> {nome}</Text>}
            KeyExtractor = {(id) => String (id)}
            />
    
    </SafeAreaView>
}
