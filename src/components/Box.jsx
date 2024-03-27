import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import tw from 'twrnc';
import { useState } from 'react'; // Import useState hook
import { hostname } from '../configurations/location';

import { http } from '../configurations/AxiosCFG';
import { useReloadBoxes, useTagPopupStore } from '../stores/store';
import { getDataFromStorage } from '../tools/StorageTool';

export default function Box(props) {
  const { img, name, id } = props.data;
  var isSelected = props.isSelected; // Use useState hook to manage isSelected state
  const toggleWrite = useTagPopupStore((state) => state.toggle)
  const setUrl = useTagPopupStore((state) => state.setUrl)
  const setReloadBoxes = useReloadBoxes((state) => state.setChanged)

  const handleView = () => {
    Linking.openURL(`${hostname}/${id}`);
  }

  // Define handleWrite function to set URL and toggle write
  const handleWrite = () => {
    setUrl(`${hostname}/${id}`);
    toggleWrite();
  };

  // Define handleDelete function to delete the item
  const handleDelete = async () => {
    try {
      const token = await getDataFromStorage('access-token'); // Use AsyncStorage for token (assuming it's imported from AsyncStorage)
      await http.delete(`/profile/delete/${id}/`, {
        headers: {
          Authorization: 'Token ' + token
        }
      });
      setReloadBoxes(); // Call setReloadBoxes to reload boxes after deletion
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };



  return (
    <TouchableOpacity style={tw`h-96 bg-blue-200 my-6 rounded-3xl mx-2 w-[75%] px-0`} onPress={props.click}>
      <Image
                source={{ uri: img }}
                style={[tw`w-full rounded-3xl`, { height: '75%' }]} // Remove resizeMode from inline style
                resizeMode="cover" // Set resizeMode to "cover" here
            />
      <View style={[tw`h-1/5 w-full mt-2 px-5`]}>
        <Text style={[tw`text-gray-800 font-semibold text-lg`]}>
          {name}
        </Text>
        <Text style={[tw`text-gray-500 text-sm`]}>
          {`${hostname}/${id}`}
        </Text>
      </View>
      {!isSelected && (
        <View style={[
          tw`absolute top-0 left-0 rounded-3xl bg-[#4d4d4d] justify-evenly py-10 items-center flex-col h-full w-full`,
          { height: '100%', width: '100%' }
        ]}>
          <TouchableOpacity style={[tw`text-white w-[60%] h-[20%] bg-blue-600 text-center rounded-full py-3`]} onPress={handleView}>
            <View style={tw`flex-row items-center justify-center h-full`}>
              <Text style={tw`text-white font-bold text-xl`}>Xem</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[tw`text-white w-60% h-[20%] bg-gray-700 text-center rounded-full py-3`]} onPress={() => { }}>
            <View style={tw`flex-row items-center justify-center h-full`}>
              <Text style={tw`text-white font-bold text-xl`}>Sửa</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[tw`text-white w-60% h-[20%] bg-blue-400 text-center rounded-full py-3`]} onPress={handleDelete}>
            <View style={tw`flex-row items-center justify-center h-full`}>
              <Text style={tw`text-white font-bold text-xl`}>Xóa</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[tw`text-white w-60% h-[20%] bg-red-500 text-center rounded-full py-3`]} onPress={handleWrite}>
            <View style={tw`flex-row items-center justify-center h-full`}>
              <Text style={tw`text-white font-bold text-xl`}>Ghi thẻ</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}
