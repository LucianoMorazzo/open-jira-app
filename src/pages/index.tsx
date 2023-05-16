import { Card, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react'
import { Layout } from '../../components/layouts';

export const HomePage = () => {
  return (
    <Layout title='Home - Open Jira'>
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Pendientes' />
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title='En progreso' />
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title='Finalizados' />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage;
