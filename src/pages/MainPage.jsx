import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { getDataFromStorage, deleteDataFromStorage } from '../tools/StorageTool';
import { getName } from '../api/userAPI';
import DrawerBar from '../components/DrawerBar';
import ListProfilePage from './ListProfilesPage';

function MainPage({ navigation }) {
    const [name, setName] = useState('');
    const [option, setOption] = useState(-1);
    const checkLogin = async () => {
        try {
            const token = await getDataFromStorage('access_token');
            if (!token) {
                navigation.replace('Login');
            }
            const response = await getName();
            if (response.status === 200) {
                setName(response.data.username);
            } else {
                deleteDataFromStorage('access_token');
                navigation.replace('Login');
            }
        }
        catch (e) {
            navigation.replace('Login');
        }
    };
    checkLogin();
    return (
        <View style={tw`w-full h-[90%] mt-[10%]`}>
            
            <DrawerBar navigation={navigation} />
            <View style={tw`flex-col items-center justify-center h-[84vh] w-full top-[9%]`}>
                <ListProfilePage navigation={navigation}/>
            </View>
        </View>
    );
};

export default MainPage;
