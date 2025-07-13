/**
 * https://github.com/atmulyana/rn-select-option
 */
import {Picker} from '@react-native-picker/picker';
import type {PickerItemProps} from '@react-native-picker/picker';
import type {ItemValue} from '@react-native-picker/picker/typings/Picker';

declare type SelectType<T = ItemValue> = typeof Picker<T>;
declare var Select: SelectType;
declare function select<T>(): SelectType<T>;

declare type OptionType<T = ItemValue> = React.ComponentType<PickerItemProps<T>>;
declare var Option: OptionType;
declare function option<T>(): OptionType<T>;

export {Select, select, Option, option};