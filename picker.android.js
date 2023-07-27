/**
 *  https://github.com/atmulyana/rn-select-option
 */
'use strict';
import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Picker as RNPicker} from '@react-native-picker/picker';
import {setRef} from 'reactjs-common';
import styles from './styles';

export default React.forwardRef(function Picker({onPress, ...props}, ref) {
    const pickerRef = React.useRef();
    setRef(ref, {
        blur() {
            pickerRef.current?.blur();
        },
        focus() {
            pickerRef.current?.focus();
        },
    });

    return <>
        <RNPicker {...props} ref={pickerRef} style={styles.touch} />
        <TouchableWithoutFeedback onPress={() => {
            onPress();
            pickerRef.current?.focus();
        }}>
            <View style={styles.touch} />
        </TouchableWithoutFeedback>
    </>;
});