# **rn-select-option**
This package contains React Native component which is like `SELECT` tag in HTML. It wraps `Picker` component of
'@react-native-picker/picker' package. This package contains two components: `Select` and `Option`.

`Select` component is a replacement for `Picker` component of '@react-native-picker/picker' package. It's more
friendly to the style attributes such as `padding`, `height` and `border`. Some style attributes seem ignored by
`Picker` component. Also, the iOS version has 'dialog' mode like the Android version one. `Select` component has
all `Picker`'s props as described in this [documentation](https://www.npmjs.com/package/@react-native-picker/picker).
Additionally, `Select` has two more props: `placeholder` and `placeholderTextColor` like `TextInput` component.

`Option` component is an alias for `Picker.Item` component.

## **How to install**

    npm i @react-native-picker/picker rn-select-option

For iOS, there is one more step:

    npx pod-install

**Example of usage:**
```javascript
import React from 'react';
import {SafeAreaView} from 'react-native';
import {
    Select,
    Option,
} from 'rn-select-option';
const countries = require('countries-list').countries;
const items = Object.keys(countries).map(item => ({
    key: item,
    value: item,
    label: countries[item].name,
}));
export default function App() {
    const [val, setVal] = React.useState(null);
    
    return <SafeAreaView>
        <Select 
            selectedValue={val}
            onValueChange={setVal}
            placeholder="--please select--"
        >
            {items.map(item => <Option {...item} />)}
        </Select>
    </SafeAreaView>;
}
```
If you want to change the selected value of `Picker`, you must use a `state` variable as the example above.