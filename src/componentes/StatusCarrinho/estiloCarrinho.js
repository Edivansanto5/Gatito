import { cores } from '../../estiloGlobal'
import{StyleSheet} from'react-native'

export default StyleSheet.create({
    conteudo:{
        backgroundColor:cores.roxo,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:24
    },
    total:{
        alignItems:'center',
    },
    descricao:{
        fontSize:16,
        color:cores.claro,
        fontWeight:'bold',
    },
    valor:{
        fontSize:18,
        fontWeight:'bold',
        color:cores.laranja,
        marginVertical:6,
    },
    botao:{
        flexGrow:1,
        alignItems:'flex-end',

    }

});