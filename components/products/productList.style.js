import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    loadingContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center',
    },

    container:{
        alignItems: 'center',
        paddingLeft: SIZES.small/2,
        paddingTop: SIZES.xxLarge,
        
    },

    separator:{
        height: 16,
    }
})

export default styles;
