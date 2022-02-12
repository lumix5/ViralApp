import {StyleSheet} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import React, {useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import AboutScreen from './screens/AboutScreen'
import CoreScreen from './screens/CoreScreen'
import {NativeBaseProvider} from 'native-base'
import {ApplicationProvider} from "@ui-kitten/components";
import * as eva from '@eva-design/eva';
import {default as theme} from './assets/custom-theme.json'

const Stack = createNativeStackNavigator()

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [IsFirstLaunch, setIsFirstLaunch] = useState(true)

    // useEffect(() => {
    //     async function prepare() {
    //         try {
    //             await SplashScreen.preventAutoHideAsync();
    //             await setTimeout(() => {

    //             }, 1)
    //             await new Promise(resolve => setTimeout(resolve, 2000));
    //         } catch (e) {
    //             console.warn(e);
    //         } finally {
    //             setAppIsReady(true);
    //         }
    //     }

    //     prepare();
    // }, []);

    // const onLayoutRootView = useCallback(async () => {
    //     if (appIsReady) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [appIsReady]);

    // if (!appIsReady) {
    //     return <View style={{backgroundColor: 'wheat', height: '100%', width: '100%'}}>
    //         <View
    //             style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
    //             onLayout={onLayoutRootView}>
    //             <Text>SplashScreen Demo! 👋</Text>
    //         </View>
    //     </View>;
    // }

    return (
        <NavigationContainer>
            <SafeAreaProvider style={styles.safeAreaProviderContainer}>
                <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
                    <NativeBaseProvider>
                        <Stack.Navigator screenOptions={{header: () => null}}>
                            <Stack.Screen name="App" component={CoreScreen}/>
                            <Stack.Screen name="Login" component={LoginScreen}/>
                            <Stack.Screen name="About" component={AboutScreen}/>

                        </Stack.Navigator>
                    </NativeBaseProvider>
                </ApplicationProvider>
            </SafeAreaProvider>
        </NavigationContainer>
    )
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
