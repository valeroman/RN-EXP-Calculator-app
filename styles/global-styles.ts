import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
    },

    mainResult: {
        color: Colors.textPrimmary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
        //fontFamily: 'SpaceMono'
    },

    subResult: {
        color: Colors.textSecundary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    button: {
        width: 80,
        height: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },

    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimmary,
        fontWeight: '300',
        fontFamily: 'SpaceMono'
    }
})