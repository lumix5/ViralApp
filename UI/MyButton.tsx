import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from "@ui-kitten/components";

type MyButtonProps = {
    onClick: () => void,
    accessoryLeft?: JSX.Element,
    accessoryRight?: JSX.Element,
    style?: object,
    children: JSX.Element | string | number,
    status?: string,
    appearance?: string,
}

const MyButton = ({onClick, accessoryLeft, accessoryRight, style, children, status, appearance}: MyButtonProps) => {
    console.log(Boolean(status))
    return (
        <Button
            status={status ? status : 'primary'}
            appearance={appearance ? appearance : 'filled'}
            onPress={() => onClick()}
            accessoryLeft={accessoryLeft}
            accessoryRight={accessoryRight}
            style={[styles.button, {...style}]}
        >{children}</Button>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        marginTop: 15,
        display: 'flex',
        justifyContent: 'space-between',
    }
})


export default MyButton;
