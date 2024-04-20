import { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";

import { useTagPopupStore, useProfile } from "../stores/store";
import { imgBaseUrl } from "../configurations/AxiosCFG";
import { editProfile } from "../api/profileAPI";
import ContactElement from "../components/ContactElement";
import EditorPanel from "../components/EditorPanel";

export default function Editor({ navigation }) {
    const toggleWrite = useTagPopupStore((state) => state.toggle);
    const setUrl = useTagPopupStore((state) => state.setUrl)
    const id = useProfile((state) => state.id);
    const name = useProfile((state) => state.name);
    const img = useProfile((state) => state.img);
    const slogan = useProfile((state) => state.slogan);
    const contact = useProfile((state) => state.contact);
    const addContact = useProfile((state) => state.addContact);
    const updateState = useProfile((state) => state.updateState);
    const [keyMapping, setKeyMapping] = useState('-1');
    const handleAdd = () => {
        const newContact = { name: '<Nhập>', url: '' };
        addContact(newContact);
    };

    const handleSave = async () => {
        console.log(id);
        console.log(name);
        console.log(slogan);
        console.log(contact);
        await editProfile(id, name, slogan, img, contact);
    }
    return (

        <View style={tw`flex-1`}>
            <View style={tw`h-80vh top-10%`}>
                <View style={tw`w-full h-90% ml-4 mt-5`}>
                    <ScrollView style={tw`h-70vh w-80% left-7% bg-white border-2 border-black 
                    rounded-2xl absolute`}>
                        <View style={tw`mb-5`}>
                            <TouchableOpacity onPress={() => setKeyMapping('img')}>
                                <Image
                                    source={{ uri: imgBaseUrl + '/?filename=' + img }}
                                    style={tw`rounded-full h-26 w-26 w-20 h-20 mx-auto mt-10`}
                                />
                            </TouchableOpacity>
                            <Text
                                style={tw`text-xl text-center mt-4 text-gray-700 font-semibold uppercase`}
                                onPress={() => setKeyMapping('name')}
                            >
                                {name}
                            </Text>
                            <Text
                                style={tw`text-center font-semibold text-gray-500`}
                                onPress={() => setKeyMapping('slogan')}
                            >
                                {slogan}
                            </Text>
                        </View>
                        {contact.map((item, index) => (
                            <ContactElement key={index} data={item} onPress={() => setKeyMapping(index.toString())} />
                        ))}
                        <TouchableOpacity
                            style={tw`bg-[#c3c4e2] py-4 my-1 flex justify-center 
                            items-center text-lg text-center 
                            rounded-md mx-auto w-[98.5%]`}
                            onPress={handleAdd}
                        >
                            <Text style={tw`text-gray-500 my-2`}>+</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                { keyMapping!=='-1' && <View style={tw`w-90% h-full left-3% m-4 flex-col absolute z-20 rounded-md bg-white`}>
                    <View style={tw`w-full h-[85%]`}>
                        {keyMapping !== '-1' && <EditorPanel keyMapping={keyMapping} setKeyMapping={setKeyMapping} />}
                    </View>
                </View>}
                <TouchableOpacity
                    style={tw`bg-[#939cf1] text-white absolute bottom-2
                        left-1/3 py-2 px-4 rounded-full`}
                    onPress={handleSave}
                >
                    <Text style={tw`text-white text-lg px-14`}>LƯU</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}