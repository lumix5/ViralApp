import {NavigationContainer} from '@react-navigation/native'
import {ApplicationProvider} from '@ui-kitten/components'
import {NativeBaseProvider} from 'native-base'
import React from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {default as theme} from '../assets/custom-theme.json'
import * as eva from '@eva-design/eva';

const Providers = ({children}: { children: React.ReactNode }) => {
    return (
        <NavigationContainer>
            <SafeAreaProvider style={styles.safeAreaProviderContainer}>
                <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
                    <NativeBaseProvider>
                        {children}
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
})

export default Providers;
