import { Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useState, useEffect } from "react";

import LogoutComponent from "./LogoutComponent";
import { useDrawerStore } from "../stores/store";
import { getName } from "../api/userAPI";

export default function DrawerBar({ navigation, style }) {
    const [name, setName] = useState("");
    const { isOpen, toggle } = useDrawerStore();
    const [isVisible, setVisible] = useState(0);
    const [logoutVisible, setLogoutVisible] = useState(false);
    const arr = [` left-[-80%]`, ``]

    function handleVisible() {
        toggle();
        if (isOpen) setVisible(1);
        else setVisible(0);
    }

    function handleLogoutVisible(e) {
        e.stopPropagation()
        setLogoutVisible(!logoutVisible);
    }

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const response = await getName();
                if (response.status === 200) {
                    setName(response.data.username);
                } else {
                    navigation.replace('Login');
                }
            }
            catch (e) {
                navigation.replace('Login');
            }
        };
        checkLogin();
    }, [isVisible]);

    return (
        <View style={tw`flex-col absolute h-[87vh] z-20 bg-[#e0fffc] left-0 top-[5%] rounded-md
        w-[80%] ${arr[isVisible]}`}>
            <Text style={tw`absolute md:hidden text-[2rem] font-bold top-6 right-[-16px] text-blue-400`}
                onPress={handleVisible}  >{'>'}</Text>
            <Text style={tw`my-6 text-2xl text-center text-gray-800`}>
                Xin chào <Text style={tw`font-bold 
                text-gray-400`} onPress={handleLogoutVisible}>{name}</Text>
            </Text>
            {logoutVisible && <LogoutComponent handleDrawerVisible={handleVisible}/>}
            <TouchableOpacity
                style={tw`mx-0 bg-blue-500 bg-opacity-40 py-3 px-4 rounded-r-2xl`}
                onPress={() => { navigation.navigate('Main'); handleVisible() }}
            >
                <Text style={tw`text-blue-800 font-bold text-2xl`}>Trang chủ</Text>
            </TouchableOpacity>
        </View>
    );
}