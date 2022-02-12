interface Colors {
    primary: {
        [key: string]: string
    }
    another: {
        [key: string]: string
    }
}

export const defaultColors: Colors = {
    another: {
        // background
        main: '#10b981',
        // buttons
        accent: '#0D889B',
        // text all other
        secondary: '#F4FBF8',
    },
    primary: {
        secondary: '#10b981',
        main: '#F4FBF8',
        accent: '#0D889B',
        textPrimary: 'black',
        textSecondary: 'white',
    },
}
