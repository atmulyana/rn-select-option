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
import isEqual from 'lodash.isequal';
import {extractTextStyle} from 'rn-style-props';
import {Picker as RNPicker} from '@react-native-picker/picker';
import Picker from './picker';
import styles from './styles';

export const Option = RNPicker.Item;

export const Select = React.forwardRef(function Select({
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
        let {label, value} = child.props ?? {};
        label = label ?? value+'';
        if (isEqual(value, selectedValue)) {
            selectedValue = value; //for Object, it's necessary (`selectedValue` and `value` may have different reference, especially on iOS)
            selectedLabel = label;
        }
    });
    if (!selectedLabel && children[0]?.key !== null) {
        selectedLabel = "";
        children.unshift(<Option key={null} label="" value={undefined} />)
    }

    const arrowStyle = [styles.arrow];
    if (dropdownIconColor) arrowStyle.push({backgroundColor: dropdownIconColor});
    
    const {current: animSize} = React.useRef(new Animated.Value(styles.ripple.height));
    const {current: animRadius} = React.useRef(new Animated.Value(styles.ripple.height / 2));
    const [rippleBgColor, setRippleBgColor] = React.useState('transparent')
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
    });
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
    const onPress = React.useCallback(() => {
        setRippleBgColor(dropdownIconRippleColor ?? styles.ripple.backgroundColor);
    }, [dropdownIconRippleColor]);
    
    style = extractTextStyle(style, true);
    
    return <View style={[style.view, styles.container]}>
        <TextInput
            {...{numberOfLines, placeholder, placeholderTextColor}}
            multiline={true}
            readOnly={true}
            style={[styles.text, style.text, styles.textRequired]}
            value={selectedLabel}
        />
        <View style={styles.arrowBox}>
            <View style={styles.arrowContainer}>
                <View style={arrowStyle} />
            </View>
            <Animated.View style={rippleStyle} />
        </View>
        <Picker
            {...props}
            {...{children, dropdownIconColor, numberOfLines, onPress, selectedValue}}
            ref={ref}
        />
    </View>;
});

export * from '@react-native-picker/picker';