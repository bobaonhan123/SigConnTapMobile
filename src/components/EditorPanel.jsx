import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useProfile } from '../stores/store';
import Avatar from './editorComponents/Avatar';
import Name from './editorComponents/Name';
import AboutMe from './editorComponents/AboutMe';
import ContactEditor from './editorComponents/ContactEditor';
import tw from 'twrnc';

export default function EditorPanel({ setKeyMapping, keyMapping }) {
    const [mapping, setMapping] = useState({
        img: <Avatar setKeyMapping={setKeyMapping}/>,
        name: <Name />,
        slogan: <AboutMe />,
    });
    const contact = useProfile((state) => state.contact);

    useEffect(() => {
        const newMapping = { ...mapping };
        contact.forEach((item, index) => {
            newMapping[index.toString()] = <ContactEditor key={index} indexArr={index} setKeyMapping={setKeyMapping} />;
        });

        setMapping(newMapping);
    }, [contact]);

    return (
        <View style={tw`h-full w-full flex flex-col`}>
            <View style={tw`h-10% flex-row-reverse items-center pr-6`}>
                <TouchableOpacity onPress={() => setKeyMapping('-1')}>
                    <Text style={tw`text-3xl font-bold px-3`}>x</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={tw`h-90%`}>
                {mapping[keyMapping]}
            </ScrollView>
        </View>
    );
}
