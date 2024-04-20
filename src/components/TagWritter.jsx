import React, { useEffect } from "react";
import NfcManager, {NfcTech,Ndef} from 'react-native-nfc-manager';
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

import { useTagPopupStore } from "../stores/store";
import logo from "../images/logo.png";

export default function TagWritter() {
    const handleClose = useTagPopupStore((state) => state.toggle)
    const url = useTagPopupStore((state) => state.url)
    const writeNFC = async () => {
        let result = false;

        try {
            await NfcManager.requestTechnology(NfcTech.Ndef);

            const bytes = Ndef.encodeMessage([Ndef.uriRecord(url)]);

            if (bytes) {
                await NfcManager.ndefHandler
                    .writeNdefMessage(bytes);
                result = true;
            }
        } catch (ex) {
            console.warn(ex);
        } finally {
            NfcManager.cancelTechnologyRequest();
        }
        handleClose();
        alert("Đã ghi dữ liệu vào thẻ NFC")
        return result;
    }
    writeNFC();


    return (
        <View style={tw`absolute top-0 left-0 w-full h-full flex items-center justify-around bg-gray-800 bg-opacity-50 z-20`}>
            <View style={tw`bg-white p-6 rounded shadow-lg max-md:p-4 max-md:w-[90%]`}>
                <TouchableOpacity onPress={handleClose} style={tw`ml-auto`}>
                    <Text style={tw`text-gray-600`}>X</Text>
                </TouchableOpacity>
                <View style={tw`w-full flex flex-col items-center`}>
                    <Text style={tw`py-2 px-1 rounded-md m-2 w-full text-black`}>Đặt điện thoại của bạn lên thẻ NFC</Text>
                    <Image source={logo} />
                </View>
            </View>
        </View>
    );
}
