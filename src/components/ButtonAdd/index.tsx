import React from 'react';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export function ButtonAdd({...reset}:RectButtonProps){
  
    return(
     <RectButton 
     style={styles.container}
     {...reset}
     >

        <MaterialCommunityIcons 
        name="plus"
        color={theme.colors.heading}
        size={24}
        />
     </RectButton>
    )
}