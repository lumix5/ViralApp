import React, { ComponentType } from "react"
import AboutScreen from "../screens/AboutScreen"
import CoreScreen from "../screens/CoreScreen"
import LoginScreen from "../screens/LoginScreen"

export type Route = {
    name: string,
    component: ComponentType | React.ReactNode
}

export const firstTimeRoutes: Route[] = [
    {
        name: 'Login',
        component: LoginScreen,
    },
    {
        name: 'About',
        component: AboutScreen,
    },
    {
        name: 'App',
        component: CoreScreen,
    },
]

export const defaultRoutes: Route[] = [
    {
        name: 'Login',
        component: LoginScreen,
    },
    {
        name: 'App',
        component: CoreScreen,
    },
]

export const userLoggedInRoutes: Route[] = [
    {
        name: 'App',
        component: CoreScreen,
    },
]
