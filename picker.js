/**
 *  https://github.com/atmulyana/react-native-select
 */
'use strict';
import React from 'react';
import {Picker as RNPicker} from '@react-native-picker/picker';
import styles from './styles';

export default React.forwardRef(function Picker(props, ref) {
    return <RNPicker {...props} ref={ref} style={styles.touch} />;
});