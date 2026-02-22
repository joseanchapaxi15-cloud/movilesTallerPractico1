
import React from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { globalStyles } from '../theme/appTheme'; 

interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    handleChangeValue: (name: string, value: string) => void; 
    name: string; 
    value: string;
    secureTextEntry: boolean; 
}

export const ImputComponent = ({ placeholder, keyboardType, handleChangeValue, name, value, secureTextEntry }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => handleChangeValue(name, value)}
            value={value}
            secureTextEntry={secureTextEntry}
            style={globalStyles.input} 
        />
    )
}