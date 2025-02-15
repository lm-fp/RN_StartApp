import { TouchableOpacity, Text, TouchableOpacityProps} from "react-native"

import { styles } from "./style"

//tipagem
type Props = TouchableOpacityProps & {
    title: string
}

export function Button({title, ...rest}:Props){
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button} {...rest}>
            <Text style = {styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}