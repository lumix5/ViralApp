import ProfileTab from "../tabs/ProfileTab"
import PromoteVideoTab from "../tabs/PromoteVideoTab"
import PurchaseTab from "../tabs/PurchaseTab"
import SliderTab from "../tabs/SliderTab"
import React from "react";

interface ITabScreenArray {
    name: string,
    component: React.ReactNode,
    icon: string
}

export const tabScreensArray: ITabScreenArray[] = [
    {
        name: 'Slider',
        component: SliderTab,
        icon: '🎚️',
    },
    {
        name: 'Promote',
        component: PromoteVideoTab,
        icon: '🎥',
    },
    {
        name: 'VideoShare',
        component: ProfileTab,
        icon: '👤',
    },
    {
        name: 'Purchase',
        component: PurchaseTab,
        icon: '💳',
    },

]
