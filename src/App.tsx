import React from 'react'

import GlobalStyle from './styles/global'
import Sigin from './Pages/Sigin'

import { AuthProvider } from './hooks/AuthContext'

const App: React.FC = () => {
    return (
        <>
            <AuthProvider>
                <Sigin />
            </AuthProvider>
            <GlobalStyle />
        </>
    );
}

export default App
