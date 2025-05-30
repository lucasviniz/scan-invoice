import { Text, View } from "react-native";
import { s } from "./styles";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/theme";

interface StepProps{
    title: string,
    description: string,
    icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon }: StepProps) {
    return (
        <View style={s.container}>
            {Icon && <Icon size={32} color={colors.green.base}/>}
            <View style={s.details}>
                <Text style={s.title}>{title}</Text>
                <Text style={s.description}>{description}</Text>
            </View>
        </View>
    )
}