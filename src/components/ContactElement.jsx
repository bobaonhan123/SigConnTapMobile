import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function ContactElement(props) {
    const { name } = props.data;

    return (
        <TouchableOpacity
            style={tw`bg-[#ebebeb] py-4 my-1 text-lg text-center rounded-md mx-auto w-[98.5%]`}
            onPress={props.onPress}
        >
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}
