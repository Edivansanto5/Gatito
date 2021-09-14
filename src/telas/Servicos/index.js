import React from "react"
import { SafeAreaView, StatusBar, Text } from "react-native"
 const servicos = [
    {
        id:1,
        nome:'Banho',
        preço:59.90,
        Descrição: 'Banho completo para seu pet com custo a beneficios'

    },
    {
        id:2,
        nome:'Vacina v4',
        preço:159.90,
        Descrição: 'Vacinamos seu pet para ficar imune a varias doenças tranmitiveis'

    },
    {
        id:3,
        nome:'Vacina contra Raiva',
        preço:259.90,
        Descrição: 'A vacina mais importante, ela permitit deixar seu pet mais saudavel'

    },
 ]

export default function Sericos(){
    return <SafeAreaView>
                <StatusBar />
                <Text>Serviços!!!!</Text>
            </SafeAreaView>
   
}
