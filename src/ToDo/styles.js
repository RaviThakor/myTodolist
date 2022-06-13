/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textInput: {
        backgroundColor: '#DDD',
        borderRadius: 10,
        paddingHorizontal: 10,
        display: 'flex',
        flex: 1,
    },
    horizontalItems: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    listContainer: {
        marginTop: 20,
        width: '100%',
    },
    button: {
        backgroundColor: '#69a',
        marginLeft: 10,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    buttonTitle: {
        color: '#FFF',
    },
    listBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#69a',
        borderWidth: 1,
        marginBottom: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    whiteMediumText: {
        color: '#FFF',
        fontSize: 20,
    },
    editDeleteIconsContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    iconStyle: {
        marginLeft: 10,
    },
});

export default styles;