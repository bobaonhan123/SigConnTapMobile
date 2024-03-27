import { useState } from "react";

import { View, Text, TextInput, TouchableOpacity,ScrollView } from "react-native";
import tw from "twrnc";
import Box from '../components/Box';

const data = [
    {
        id: 1,
        name: "Hồ Sỹ Bảo Nhân",
        slogan: "Một thằng IT biết cài win và sửa mạng",
        img: "https://www.w3schools.com/tags/img_girl.jpg",
        contact: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/hosybaonhan"
            }, {
                name: "Github",
                url: "https://github.com/bobaonhan123"
            }
        ]
    }, {
        id: 2,
        name: "Hồ Sỹ Bảo Nhân",
        slogan: "Một thằng IT biết cài win và sửa mạng",
        img: "https://www.w3schools.com/tags/img_girl.jpg",
        contact: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/hosybaonhan"
            }, {
                name: "Github",
                url: "https://github.com/bobaonhan123"
            }
        ]
    }, {
        id: 3,
        name: "Hồ Sỹ Bảo Nhân",
        slogan: "Một thằng IT biết cài win và sửa mạng",
        img: "https://www.w3schools.com/tags/img_girl.jpg",
        contact: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/hosybaonhan"
            }, {
                name: "Github",
                url: "https://github.com/bobaonhan123"
            }
        ]
    }, {
        id: 4,
        name: "Hồ Sỹ Bảo Nhân",
        slogan: "Một thằng IT biết cài win và sửa mạng",
        img: "https://www.w3schools.com/tags/img_girl.jpg",
        contact: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/hosybaonhan"
            }, {
                name: "Github",
                url: "https://github.com/bobaonhan123"
            }
        ]
    }
];

export default function ListProfilePage() {
    const [option, setOption] = useState(-1);
    return (
        
        <ScrollView style={tw`flex-column w-full `} contentContainerStyle={tw`items-center justify-center`} >
            {data.map((item, index) => {
                return (
                    <Box key={index} data={item} isSelected={index !== option} click={(e) => {
                        e.stopPropagation()
                        setOption(index);
                    }} />
                )
            })}

        </ScrollView>
    );
}