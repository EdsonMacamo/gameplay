import React,{ReactNode} from 'react';
import {
    View,
    Modal, 
    ModalProps,
    TouchableWithoutFeedback,
} from 'react-native';
import { Background } from '../Background';
import { styles } from './styles';

type Props = ModalProps & {
    children: ReactNode;
    closeModalL:() => void;
}
export function ModalView({children,closeModalL, ...rest}: Props){
   
    return(
    <Modal
    transparent
    animationType="slide"
    statusBarTranslucent
    {...rest}
    >
        <TouchableWithoutFeedback onPress={closeModalL}>
    <View style={styles.overlay}>
        <View style={styles.container}>
            <Background>
                <View style={styles.bar}/>
                {children}
            </Background>
        </View>
    </View>
   </TouchableWithoutFeedback>
    </Modal>
 
    );
}