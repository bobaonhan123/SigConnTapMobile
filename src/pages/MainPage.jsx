import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { getDataFromStorage } from '../tools/StorageTool';
import { getName } from '../api/userAPI';
import DrawerBar from '../components/DrawerBar';

function MainPage({ navigation }) {
    const [name, setName] = useState('');
    useEffect(() => {
        const checkLogin = async () => {
            const token = await getDataFromStorage('access_token');
            if (!token) {
                navigation.replace('Login');
            }
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
        <View style={tw`w-full h-full`}>
            <DrawerBar navigation={navigation} />
            <Text style={tw`text-3xl`}>{name}</Text>
            
        </View>
    );
};

export default MainPage;
