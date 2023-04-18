import { Typography } from '@mui/material';
import React from 'react'
import { Layout } from '../../components/layouts';

export const HomePage = () => {
  return (
    <Layout title='First Page'>
      <Typography variant='h1' color='primary'>Hi World</Typography>
    </Layout>
  )
}

export default HomePage;
