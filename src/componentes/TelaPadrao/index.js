import React from 'react'
import { SafeAreaView,StatusBar,KeyboardAvoidingView,Platform} from 'react-native'
import estiloCompleto from'../../estiloGlobal'
export default function TelaPadrao({children}){
    return <SafeAreaView style={estiloCompleto.preencher}>
    
        <StatusBar/>
        <KeyboardAvoidingView
            behavior = {Platform.os == 'ios' ? 'padding':'height'}
            style = {estiloCompleto.preencher}
            >
            {children}
        </KeyboardAvoidingView>       
    </SafeAreaView>
}