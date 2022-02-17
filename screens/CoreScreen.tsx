import React, {useEffect} from 'react';
import {Text} from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {tabScreensArray} from '../tabScreensMock/tabScreenRoutes';
import storeDataOnViewCoreScreen from "../localStorage/services/StoreDataOnViewCoreScreen";

const Tab = createBottomTabNavigator();

type TabScreensProps = {
    name: string,
    component: React.ReactNode,
    icon: string
}

const CoreScreen = () => {

    useEffect(() => {
        storeDataOnViewCoreScreen()
    })

    return (
        <Tab.Navigator screenOptions={{header: () => null}}>
            {
                tabScreensArray.map(({name, component, icon}: TabScreensProps): React.ReactNode => {
                    return (
                        <Tab.Screen
                            name={name}
                            component={component}
                            options={{
                                tabBarLabel: () => {
                                    return null;
                                },
                                tabBarIcon: () => <Text>{icon}</Text>,
                            }}
                        />
                    )
                })
            }
        </Tab.Navigator>
    );
};


export default CoreScreen;
