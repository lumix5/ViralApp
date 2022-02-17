import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (StorageKey: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(StorageKey)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}
