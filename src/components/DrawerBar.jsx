import { Text, View } from "react-native";
import tw from "twrnc";
import { useState,useEffect } from "react";

import { useDrawerStore } from "../stores/store";
import { getName } from "../api/userAPI";

export default function DrawerBar({ navigation, style }) {
    const [name, setName] = useState("");
    const { isOpen, toggle } = useDrawerStore();
    const [isVisible, setVisible] = useState(0);
    const arr = [` left-[-80%]`, ``]

    function handleVisible() {
        toggle();
        if (isOpen) setVisible(1);
        else setVisible(0);
    }

    useEffect(() => {
        const checkLogin = async () => {
            const response = await getName();
            if (response.status === 200) {
                setName(response.data.username);
            } else {
                navigation.replace('Login');
            }
        };
        checkLogin();
    }, []);

    return (
        <View style={tw`flex-column fixed h-[87vh] z-20 bg-[#e0fffc] left-0 top-[10%] rounded-md
        w-[80%] transition ${arr[isVisible]}`}>
            <Text style={tw`absolute md:hidden text-[2rem] font-bold top-6 right-[-16px] text-blue-400`}
                onPress={handleVisible}  >{'>'}</Text>
            <Text style={tw`my-6 text-2xl text-center`}>
                Xin chào <Text style={tw`font-bold`}>{name}</Text>
            </Text>
        </View>
    );
}