import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { httpFile } from '../../configurations/AxiosCFG';
import { useProfile } from '../../stores/store';
import tw from 'twrnc';

export default function Avatar() {
    const editImg = useProfile((state) => state.editImg);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (file) => {
        setSelectedFile(file);
    };

    useEffect(() => {
        const uploadFile = (file) => {
            if (file) {
                const formData = new FormData();
                formData.append('image', file);
                httpFile.post('/', formData)
                    .then((response) => {
                        console.log('File uploaded successfully:', response.data);
                        editImg(response.data.url);
                    })
                    .catch((error) => {
                        console.error('Error uploading file:', error);
                    });
            }
        };
        uploadFile(selectedFile);
    }, [selectedFile]);

    return (
        <View style={tw`h-90% w-full p-4 pl-8`}>
            <Text style={tw`text-4xl font-semibold`}>Upload ảnh</Text>
            <TouchableOpacity
                style={tw`mt-16 h-12 font-semibold w-64 h-64 rounded-xl bg-[#cfefff] items-center justify-center text-2xl`}
                onPress={() => {
                }}
            >
                <Text>Chọn ảnh</Text>
            </TouchableOpacity>
        </View>
    );
}
