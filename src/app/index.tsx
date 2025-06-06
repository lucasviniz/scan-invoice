import { Button } from "@/components/button"
import { Steps } from "@/components/steps"
import { Welcome } from "@/components/welcome"
import { router } from "expo-router"
import {View, Text} from "react-native"


export default function Index(){
    return(
        <View
            style={{
                flex: 1,
                padding: 30,
                gap: 40
            }}
        >
            <Welcome/>
            <Steps/>

            <Button onPress={() => router.navigate("/login")}>
                <Button.Title>Começar</Button.Title>
            </Button>
        </View>
    )
}