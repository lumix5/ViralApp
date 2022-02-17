import {StyleSheet} from 'react-native'
import React, {useState} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {defaultRoutes, firstTimeRoutes, Route, userLoggedInRoutes} from './stackScreenRoutes/screenRoutes';
import Providers from './hoc/Providers'
import {getData} from "./localStorage/getData";
import {storeData} from "./localStorage/storeData";

const Stack = createNativeStackNavigator()

export default function App() {
    const [appIsReady, setAppIsReady] = useState(true)
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [isFirstLaunch, setIsFirstLaunch] = useState(true)
    
    //TODO: Decompose
    getData('isAuth').then((result) => {
        if (result === null) {
            storeData('isAuth', {isAuth: false})
        }
        setIsAuthorized(result?.isAuth)
    })

    getData('isFirstTime').then((result) => {
        if (result === null) {
            storeData('isFirstTime', {isFirstTime: true})
        }
        setIsFirstLaunch(result?.isFirstTime)
    })
    
    return (
        <Providers>
            <Stack.Navigator screenOptions={{header: () => null}}>
                {
                    isFirstLaunch
                        ?
                        firstTimeRoutes.map(({name, component}: Route) => {
                            return <Stack.Screen name={name} component={component}/>
                        })
                        : isAuthorized
                            ?
                            userLoggedInRoutes.map(({name, component}: Route) => {
                                return <Stack.Screen name={name} component={component}/>
                            })
                            :
                            defaultRoutes.map(({name, component}: Route) => {
                                return <Stack.Screen name={name} component={component}/>
                            })
                }
            </Stack.Navigator>
        </Providers>
    );
}

const styles = StyleSheet.create({
    safeAreaProviderContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
