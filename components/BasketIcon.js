import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import {useNavigation} from "@react-navigation/native";

const BasketIcon = () => {

    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();

    const basketTotal = useSelector(selectBasketTotal);

    if(items.length === 0 ) return;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1" onPress={() => navigation.navigate("Basket")} >
        <Text className="font-extrabold text-lg text-white bg-[#01A296] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center" >View Basket</Text>
        <Text className="font-extrabold text-lg text-white">${basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon