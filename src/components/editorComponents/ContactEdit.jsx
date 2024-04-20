import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useProfile } from '../../stores/store';
import tw from 'twrnc';

export default function ContactEdit({ indexArr, setKeyMapping }) {
    const name = useProfile((state) => state.contact[indexArr].name);
    const url = useProfile((state) => state.contact[indexArr].url);
    const editContactName = useProfile((state) => state.editContactName);
    const deleteContact = useProfile((state) => state.deleteContact);

    const namechange = (text) => {
        editContactName(indexArr, text);
    };

    const editContactUrl = useProfile((state) => state.editContactUrl);
    const urlchange = (text) => {
        editContactUrl(indexArr, text);
    };

    const handleDeleteContact = () => {
        deleteContact(indexArr);
        setKeyMapping('-1');
    };

    return (
        <View style={tw`h-90% w-full p-4 pl-8`}>
            <Text style={tw`text-4xl font-semibold mb-16`}>Thông tin</Text>
            <Text style={tw`mb-2`}>Tiêu đề</Text>
            <TextInput
                style={tw`mb-6 h-12 pl-4 font-semibold w-[80%] rounded-xl bg-[#cfefff]`}
                value={name}
                onChangeText={namechange}
            />
            <Text style={tw`mb-2`}>Liên kết</Text>
            <TextInput
                style={tw`mb-16 h-12 pl-4 font-semibold w-[80%] rounded-xl bg-[#cfefff]`}
                value={url}
                onChangeText={urlchange}
            />
            <View style={tw`w-[80%] mb-16 pl-4`}>
                <TouchableOpacity
                    style={tw`bg-[#ff5757] py-2 px-14 rounded-full`}
                    onPress={handleDeleteContact}
                >
                    <Text style={tw`text-white text-lg`}>Xóa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
