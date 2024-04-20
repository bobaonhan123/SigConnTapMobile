import { useEffect, useState } from "react";

import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { getAllProfiles, createProfile } from "../api/profileAPI";
import { useReloadBoxes } from "../stores/store";
import tw from "twrnc";
import Box from '../components/Box';

export default function ListProfilePage({ navigation }) {
    const [option, setOption] = useState(-1);
    const [data, setData] = useState([]);
    const isReload = useReloadBoxes((state) => state.isChanged)
    useEffect(() => {
        console.log('fetching data');
        async function fetchData() {
            const response = await getAllProfiles();
            setData(response.data);
        }
        fetchData();
    }, [isReload]);

    const handleCreate = async () => {
        await createProfile();
        const response = await getAllProfiles();
        await setData(response.data);
    }
    return (

        <ScrollView style={tw`flex-col w-full `} contentContainerStyle={tw`items-center justify-center`} >
            <TouchableOpacity style={tw`bg-[#3fec9b] py-4 px-10 rounded-full mb-6 ml-auto mr-[13%]`} 
            onPress={handleCreate}><Text
            style={tw`font-bold`}
            >Tạo mới</Text></TouchableOpacity>
            {data.map((item, index) => {
                return (
                    <Box navigation={navigation} key={index} data={item} isSelected={index !== option} click={(e) => {
                        e.stopPropagation()
                        if (index === option) {
                            setOption(-1);
                        } else {
                            setOption(index);
                        }
                    }} />
                )
            })}

        </ScrollView>
    );
}