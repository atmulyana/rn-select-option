/**
 * https://github.com/atmulyana/rn-select-option
 */
import type {Component} from 'react';
import {Picker} from '@react-native-picker/picker';
import type {PickerProps, PickerItemProps} from '@react-native-picker/picker';
import type {ItemValue} from '@react-native-picker/picker/typings/Picker';

declare class _Select<T> extends Picker<T>
    implements Component<PickerProps<T> & {
        placeholder?: string,
        placeholderTextColor?: PickerProps<T>['dropdownIconColor'],
    }>
{}
declare class Select extends _Select<ItemValue> {}
declare function select<T>(): _Select<T>;

declare type OptionType<T> = React.ComponentType<PickerItemProps<T>>;
declare var Option: OptionType<ItemValue>;
declare function option<T>(): OptionType<T>;

export {Select, select, Option, option};