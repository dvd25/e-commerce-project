import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

function MainFeaturedPost(props) {
  //   const { post } = props;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Item>
          <Grid container>
            <Grid item md={12}>
              <Box
                sx={{position: 'sticky', p: {sm: 2, md: 12, lg: 12}, justifyContent: {md: "center"}}}>
                <Typography sx={{textAlign: "center"}}component="h1" variant="h3" color="inherit" gutterBottom>
                  E-commerce App
                </Typography>
                <Typography variant="h4" color="inherit" paragraph>
                  Current functionalities: 
                </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                  <ul style={{listStylePosition: "inside", justifyContent: "left"}}> 
                    <li> Products page populated with data retrieved from API.</li>
                    <li> Sign in authorization page.</li>
                  </ul>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Grid>

  );
}


export default MainFeaturedPost;