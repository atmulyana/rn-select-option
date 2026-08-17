/**
 *  https://github.com/atmulyana/rn-select-option
 */
'use strict';
import React from 'react';
import {View} from 'react-native';
import {Picker as RNPicker} from '@react-native-picker/picker';
import {forwardRef} from 'reactjs-common';
import styles from './styles';

export default forwardRef(function Picker(props, ref) {
    return props?.disabled
        ? <View style={styles.touchPicker} />
        : <RNPicker {...props} enabled ref={ref} style={styles.touchPicker} />;
});