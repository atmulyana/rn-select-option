/**
 *  https://github.com/atmulyana/rn-select-option
 */
'use strict';
import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Picker as RNPicker} from '@react-native-picker/picker';
import {forwardRef, setRef} from 'reactjs-common';
import styles from './styles';

export default forwardRef(function Picker({disabled, onPress, ...props}, ref) {
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
        <RNPicker {...props} enabled={!disabled} ref={pickerRef} style={styles.touchPicker}  />
        <TouchableWithoutFeedback
            aria-disabled={disabled}
            disabled={disabled}
            onPress={() => {
                onPress();
                pickerRef.current?.focus();
            }}
        >
            <View style={styles.touch} />
        </TouchableWithoutFeedback>
    </>;
});