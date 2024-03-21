import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataToStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        return true;
    } catch (e) {
        return false;
    }
};

export const getDataFromStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
        return null;
    } catch (e) {
        return null;
    }
};

export const deleteDataFromStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
}