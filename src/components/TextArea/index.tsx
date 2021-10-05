import React from 'react';
import {TextInput,TextInputProps} from 'react-native';

import { styles } from './styles';
export function TextArea({...reset}: TextInputProps){
    return(
   <TextInput
   style={styles.container}
   {...reset}
   />
    )
}