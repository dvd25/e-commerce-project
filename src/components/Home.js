import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Grid';
import MainFeaturedPost from './MainFeaturedPost';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Home(props) {

    const theme = createTheme();
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container>
                    {/* contains the basic home information about current features */}
                    <MainFeaturedPost/> 
                </Container>
            </ThemeProvider>
        </>
    );
}

export default Home;