import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { deleteDataFromStorage } from '../tools/StorageTool';

export default function LogoutComponent({handleDrawerVisible}) {

    const handleLogout = async () => {
        await deleteDataFromStorage('access_token');
        handleDrawerVisible();
    };

    return (
        <View style={tw`flex flex-col h-9 absolute w-full `}>
            <TouchableOpacity
                style={tw`bg-gray-200 py-4 my-1
                rounded-md mx-auto 
                w-[98.5%]
                absolute top-16 flex justify-center items-center z-40`}
                onPress={handleLogout}
            >
                <Text style={tw`text-lg text-gray-700`}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    );
}
