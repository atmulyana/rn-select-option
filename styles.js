/**
 *  https://github.com/atmulyana/rn-select-option
 */
import {StyleSheet} from 'react-native';

const ARROW_COLOR = '#ddd';
const ARROW_BOX_SIZE = 8;

export default StyleSheet.create({
    arrowBox: {
        alignItems: 'center',
        height: ARROW_BOX_SIZE,
        justifyContent: 'center',
        overflow: 'visible',
        right: 8,
        top: ARROW_BOX_SIZE / 8,
        width: ARROW_BOX_SIZE,
    },
    arrowContainer: {
        ...StyleSheet.absoluteFill,
        overflow: 'hidden',
        top: ARROW_BOX_SIZE / 8,
    },
    arrow: {
        backgroundColor: ARROW_COLOR,
        height: ARROW_BOX_SIZE,
        top: -(ARROW_BOX_SIZE / 2),
        transform: [{rotate: '45deg'}],
        width: ARROW_BOX_SIZE,
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    pickerIOS: {
        backgroundColor: '#eee',
        height: 210,
        maxHeight: '95%',
        maxWidth: 400,
        overflow: 'hidden',
        shadowColor: 'gray',
        shadowOffset: 2,
        width: '80%',
    },
    pickerIOSBackdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        opacity: 0.6,
    },
    pickerIOSClose: {
        color: ARROW_COLOR,
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.5,
        textShadowOffset: {height: 2, width: 2},
        textShadowColor: '#888',
        position: 'absolute',
        right: 6,
        top: 6,
    },
    pickerIOSContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ripple: {
        backgroundColor: '#666',
        borderRadius: ARROW_BOX_SIZE / 2,
        height: ARROW_BOX_SIZE,
        opacity: 0.4,
        width: ARROW_BOX_SIZE,
    },
    text: {
        fontFamily: 'Arial',
        fontSize: 14,
        lineHeight: 17,
    },
    textRequired: {
        flex: 1,
    },
    touch: {
        ...StyleSheet.absoluteFillObject,
        color: 'transparent',
        opacity: 0,
    },
});