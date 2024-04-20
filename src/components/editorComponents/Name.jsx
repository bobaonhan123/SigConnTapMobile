import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useProfile } from '../../stores/store';
import tw from 'twrnc';

export default function Name() {
    const name = useProfile((state) => state.name);
    const updateName = useProfile((state) => state.updateName);

    const nameChange = (text) => {
        updateName(text);
    };

    return (
        <View style={tw`h-90% w-full p-4 pl-8`}>
            <Text style={tw`text-4xl font-semibold`}>Tên</Text>
            <TextInput
                style={tw`mt-16 h-12 pl-4 font-semibold w-[80%] rounded-xl bg-[#cfefff]`}
                value={name}
                onChangeText={nameChange}
            />
        </View>
    );
}
