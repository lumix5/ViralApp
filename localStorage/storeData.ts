import AsyncStorage from '@react-native-async-storage/async-storage';

interface IValue {
    isFirstTime?: boolean
    isAuth?: boolean
}

export const storeData = async (StorageKey: string, value: IValue) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(StorageKey, jsonValue)
    } catch (e) {
        // saving error
    }
}
