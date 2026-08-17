/**
 * https://github.com/atmulyana/rn-select-option
 */
import React from 'react';
import type {PickerItemProps, PickerProps} from '@react-native-picker/picker';
import type {ItemValue} from '@react-native-picker/picker/typings/Picker';

type SelectType<T = ItemValue> = React.ComponentType<
    Omit<PickerProps<T>, 'enabled'> & {
        disabled?: boolean,
        ref?: React.Ref<{
            blur: () => void,
            focus: () => void,
        }>
    }
>;
declare var Select: SelectType;
declare function select<T>(): SelectType<T>;

type OptionType<T = ItemValue> = React.ComponentType<PickerItemProps<T>>;
declare var Option: OptionType;
declare function option<T>(): OptionType<T>;

export {Select, select, Option, option};