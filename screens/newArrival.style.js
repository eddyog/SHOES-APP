import { COLORS, SIZES } from "../constants/index";
import { StyleSheet } from "react-native"


const styles = StyleSheet.create({

    container: {
        FLEX: 1,
        backgroundColor: COLORS.lightWhite,
        
    },

    wrapper:{
        FLEX: 1,
        backgroundColor: COLORS.lightWhite,
        
    },

    upperRow:{
        width: SIZES.width-50,
        marginHorizontal: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        backgroundColor: COLORS.primary,
        borderRadius:SIZES.large,
        top:SIZES.large,
        zIndex: 999,
    },

    heading:{
        fontFamily: "semiBold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite,
        marginLeft: 5,
    }


})

export default styles;