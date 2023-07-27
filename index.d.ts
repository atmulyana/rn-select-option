/**
 * https://github.com/atmulyana/rn-select
 */
import type {Component} from 'react';
import {Picker} from '@react-native-picker/picker';
import type {PickerProps} from '@react-native-picker/picker';

declare class Select<T> extends Picker<T>
    implements Component<PickerProps<T> & {
        placeholder?: string,
        placeholderTextColor?: PickerProps<T>['dropdownIconColor'],
    }>
{}

declare var Option: typeof Picker.Item;

export {Select, Option};