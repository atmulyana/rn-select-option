/**
 * https://github.com/atmulyana/rn-select-option
 */
'use strict';
import React from 'react';
import {
    Animated,
    TextInput,
    View,
} from 'react-native';
import {Picker as RNPicker} from '@react-native-picker/picker';
import {emptyArray, emptyString, objEquals} from 'javascript-common';
import {forwardRef} from 'reactjs-common';
import {extractTextStyle} from 'rn-style-props';
import Picker from './picker';
import styles from './styles';

export const Option = RNPicker.Item;

export const Select = forwardRef(function Select({
    children,
    dropdownIconColor,
    dropdownIconRippleColor,
    numberOfLines = 1,
    placeholder,
    placeholderTextColor,
    selectedValue,
    style,
    ...props
}, ref) {
    let selectedLabel;
    children = React.Children.toArray(children);
    children.forEach(child => {
        if (child.type !== Option) throw "Invalid child element! The child of `Select` must be `Option`";
        let {label, value} = child.props ?? {};
        label = label ?? value + emptyString;
        if (objEquals(value, selectedValue)) {
            selectedValue = value; //for Object, it's necessary (`selectedValue` and `value` may have different reference, especially on iOS)
            selectedLabel = label;
        }
    });
    if (!selectedLabel && children[0]?.key !== null) {
        selectedLabel = emptyString;
        children.unshift(<Option key={null} label={emptyString} value={undefined} />);
    }

    const [rippleBgColor, setRippleBgColor] = React.useState('transparent');
    
    const onPress = React.useCallback(() => {
        setRippleBgColor(dropdownIconRippleColor ?? styles.ripple.backgroundColor);
    }, [dropdownIconRippleColor]);
    
    const $tyle = React.useMemo(() => {
        const s =  extractTextStyle(style, true);
        s.container = [s.view, styles.container];
        s.text = [styles.text, s.text, styles.textRequired];
        s.arrow = dropdownIconColor ? [styles.arrow, {backgroundColor: dropdownIconColor}] : styles.arrow;
        return s;
    }, [style, dropdownIconColor]);
    
    return <View style={$tyle.container}>
        <TextInput
            {...{numberOfLines, placeholder, placeholderTextColor}}
            multiline={true}
            readOnly={true}
            style={$tyle.text}
            value={selectedLabel}
        />
        <View style={styles.arrowBox}>
            <View style={styles.arrowContainer}>
                <View style={$tyle.arrow} />
            </View>
            <Ripple {...{rippleBgColor, setRippleBgColor}} />
        </View>
        <Picker
            {...props}
            {...{children, numberOfLines, onPress, selectedValue}}
            ref={ref}
        />
    </View>;
});

const Ripple = React.memo(function Ripple({rippleBgColor, setRippleBgColor}) {
    const {current: animSize} = React.useRef(new Animated.Value(styles.ripple.height));
    const {current: animRadius} = React.useRef(new Animated.Value(styles.ripple.height / 2));
    const rippleStyle = Object.assign({}, 
        styles.ripple,
        {backgroundColor: rippleBgColor}, 
        {
            borderRadius: animRadius,
            height: animSize,
            width: animSize,
        }
    );
    React.useEffect(() => {
        animSize.addListener(({value}) => animRadius.setValue(value / 2));
    }, emptyArray);
    React.useEffect(() => {
        if (rippleBgColor != 'transparent') {
            Animated.timing(animSize, {
                toValue: styles.ripple.height * 4,
                duration: 1000,
                useNativeDriver: false,
            }).start(() => {
                setRippleBgColor('transparent');
                animSize.setValue(styles.ripple.height);
            });
        }
    }, [rippleBgColor]);

    return <Animated.View style={rippleStyle} />;
},
(prevProps, nextProps) => prevProps.rippleBgColor == nextProps.rippleBgColor);

export const select = () => Select;
export const option = () => Option;

export * from '@react-native-picker/picker';