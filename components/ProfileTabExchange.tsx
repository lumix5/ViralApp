import React from 'react';
import {exchange} from "../mockData/followersExchangeMock";
import MyButton from "../UI/MyButton";
import FollowerExchange from "./FollowerExchange";
import CurrencyExchange from "./CurrencyExchange";

const ProfileTabExchange = () => {
    return (
            exchange.map((offer) => {
                return (
                    <MyButton
                        accessoryLeft={<FollowerExchange {...offer} />}
                        accessoryRight={<CurrencyExchange {...offer} />}
                        key={offer.followers}
                        appearance='filled' status='control'
                    >
                    </MyButton>
                )
            })
    );
};

export default ProfileTabExchange;
