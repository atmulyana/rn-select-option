/**
 * https://github.com/atmulyana/rn-select-option
 */
'use strict';
import React from 'react';
import {
    Modal,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {Picker as RNPicker} from '@react-native-picker/picker';
import {setRef} from 'reactjs-common';
import styles from './styles';

export default React.forwardRef(function Picker({children, ...props}, ref) {
    const [visible, showList] = React.useState(false);
    
    setRef(ref, {
        blur() {
            showList(false);
        },

        focus() {
            showList(true);
        }
    });

    return <>
        <TouchableWithoutFeedback onPress={() => {
            props.onPress();
            showList(true);
        }}>
            <View style={styles.touch} />
        </TouchableWithoutFeedback>
        <Modal visible={visible} supportedOrientations={['landscape', 'portrait']} transparent={true}>
            <View style={styles.pickerIOSContainer}>
                <TouchableWithoutFeedback onPress={() => showList(false)}>
                    <View style={styles.pickerIOSBackdrop} />
                </TouchableWithoutFeedback>
                <View style={styles.pickerIOS}>
                    <RNPicker {...props} style={StyleSheet.absoluteFill}>
                        {children}
                    </RNPicker>
                    <Text onPress={() => showList(false)} style={styles.pickerIOSClose}>X</Text>
                </View>
            </View>
        </Modal>
    </>;
});