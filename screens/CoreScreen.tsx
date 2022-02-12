import React from 'react';
import {Text} from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SliderTab from "../Tabs/SliderTab";
import PurchaseTab from "../Tabs/PurchaseTab";
import ProfileTab from "../Tabs/ProfileTab";
import PromoteVideoTab from "../Tabs/PromoteVideoTab";

const Tab = createBottomTabNavigator();

const CoreScreen = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <Tab.Navigator screenOptions={{header: () => null}}>
            <Tab.Screen name="Slider" component={SliderTab} options={{
                tabBarLabel: () => {
                    return null
                },
                tabBarIcon: () => (<Text style={{color: 'red'}}>🎚️</Text>)
            }}/>
            <Tab.Screen name="Promote" component={PromoteVideoTab} options={{
                tabBarLabel: () => {
                    return null
                },
                tabBarIcon: () => (<Text style={{color: 'red'}}>🎥</Text>)
            }}/>
            <Tab.Screen name="VideoShare" component={ProfileTab} options={{
                tabBarLabel: () => {
                    return null
                },
                tabBarIcon: () => (<Text style={{color: 'red'}}>👤</Text>)
            }}/>
            <Tab.Screen name="Purchase" component={PurchaseTab} options={{
                tabBarLabel: () => {
                    return null
                },
                tabBarIcon: () => (<Text style={{color: 'red'}}>💳</Text>)
            }}/>

        </Tab.Navigator>
    );
};


export default CoreScreen;
