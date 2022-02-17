import {storeData} from "../storeData";

export default function storeDataOnViewCoreScreen() {
    storeData('isAuth', {isAuth: true})
    storeData('isFirstTime', {isFirstTime: false})
}
