import React from 'react'

import GlobalStyle from './styles/global'
import Sigin from './Pages/Sigin'

import AppProvider from './hooks'

const App: React.FC = () => {
    return (
        <>
            <AppProvider>
                <Sigin />
            </AppProvider>

            <GlobalStyle />
        </>
    );
}

export default App
