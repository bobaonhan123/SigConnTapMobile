import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useProfile } from '../../stores/store';
import tw from 'twrnc';

export default function AboutMe() {
    const slogan = useProfile((state) => state.slogan);
    const updateSlogan = useProfile((state) => state.updateSlogan);

    const sloganChange = (text) => {
        updateSlogan(text);
    };

    return (
        <View style={tw`h-90% w-full p-4 pl-8`}>
            <Text style={tw`text-4xl font-semibold`}>Slogan</Text>
            <TextInput
                style={tw`mt-16 h-12 pl-4 font-semibold w-[80%] rounded-xl bg-[#cfefff]`}
                value={slogan}
                onChangeText={sloganChange}
            />
        </View>
    );
}
