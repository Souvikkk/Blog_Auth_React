import React, { useEffect, useState } from 'react'
import { GetServiceDetails } from '../Service/AllApi'
import { Avatar, Box, Container, Grid, Paper, Skeleton, Typography } from '@mui/material'
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
const ServicePage = () => {
    const [service, setService] = useState([])
    const [loading , setLoading] =useState(true)

    const GetService = async () => {
        try {
            const response = await GetServiceDetails()
            setService(response?.data?.data)
            setLoading(false)
        } catch (erorr) {

        }
    }
    useEffect(() => {
        GetService()
    }, [])

    return (
        <>
            <Container>

                <Box my={"70px"}>
                    <Typography variant='h3' fontWeight={'bold'} align='center' mt={2}>Our Services <br /> <span style={{ color: "purple" }}>----</span> </Typography>
                    <Typography align='center' mb={7} color={'black'}>Unlock web development mastery with React, HTML, CSS, JavaScript, C, and Laravel. Dive into hands-on projects with expert guidance. Elevate your skills now!</Typography>

                    <Grid container spacing={4}>
                    {loading ? (
            
            Array.from({ length: 3 }).map((_, index) => (
              <Grid item md={4} key={index}>
                <Paper elevation={10} sx={{ borderRadius: '20px', backgroundColor: '#a0a6b0', height: 'auto' }}>
                  <Skeleton variant="rectangular" height={120} sx={{ borderRadius: '20px 20px 0 0' }} />
                  <Box p={2}>
                    <Skeleton variant="text" height={20} width="50%" mb={1} />
                    <Skeleton variant="text" height={60} />
                  </Box>
                </Paper>
              </Grid>
            ))
          ) : (
                        
                            service?.map((items, index) => {
                                return (
                                    <>
                                        <Grid item md={4} >
                                            <Paper elevation={15} key={index} sx={{ borderRadius: "20px", backgroundColor: '#a0a6b0', height:'auto' }}>
                                                <Grid item align='center' paddingTop={"40px"}>
                                                    <Avatar sx={{ my: "2", aliign: 'center', backgroundColor: "purple" }}><ModelTrainingIcon /> </Avatar>
                                                </Grid>
                                                <Grid item>
                                                    <Typography my={2} align='center' fontSize={'18px'} fontWeight={'bold'}>{items.name} </Typography>
                                                    <Typography mt={2} p={2} paddingBottom={"40px"} align='center' fontSize={'13px'} color={'black'}>{items.details.slice(0, 70)} </Typography>
                                                </Grid>

                                            </Paper>
                                        </Grid>

                                    </>
                                )
                            })
          )
                        }
                    </Grid>

                </Box>

            </Container>

        </>
    )
}

export default ServicePage