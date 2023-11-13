import React, { useState } from 'react'
import Layout from '../Layouts/Layout'
import { Box, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material'
import { PostMessage } from '../Service/AllApi'
import { toast } from 'react-toastify'


const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loading,setLoading] = useState(false)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      const response = await PostMessage({ name, email, phone, message })
      if (response.data && response?.data?.success) {
        toast.success(response?.data?.message)
        // console.log("message",response);
        setLoading(false)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error("something went wrong")
      setLoading(false)
    }
  }


  return (
    <>
      <Layout>
        
        <Box>

          <iframe title="Map of our Location in Sector V, Bidhannagar, Kolkata" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.291556012733!2d88.42368323450214!3d22.57637703532011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1697651661690!5m2!1sen!2sin" width="100%" height="350" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>


        <Box sx={{ marginTop: "50px" }}>
          <Paper elevation={10} sx={{ paddingBottom: '20px', width: '78%', margin: 'auto', backgroundColor: '#dedede' ,borderRadius:'30px'}}>
            <Grid container spacing={2} align='center'>

              <Grid item md={4}>
                <Typography variant='h6'>Location </Typography>
                <Typography variant='p'>265/B1 D-Block </Typography>
                <br />
                <Typography variant='p'>Sector V Kol 76 </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography variant='h6'>Mail Us </Typography>
                <Typography variant='p'>echostack@gmail.com </Typography>
                <br />
                <Typography variant='p'>academy@gmail.com </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography variant='h6'>Call Us </Typography>
                <Typography variant='p'>1800987654321 </Typography>
                <br />
                <Typography variant='p'>1800987654322 </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Box sx={{ marginTop: "50px" }}>
          <Paper elevation={10} sx={{ padding: '20px', width: '75%', margin: 'auto', marginBottom: '20px', backgroundColor: '#dedede',borderRadius:'30px' }}>
            <Grid align='center'>
              <form onSubmit={handleSubmit}>
                <Grid item xs={12} marginBottom={2}>
                  <TextField placeholder='Enter Name' label='Name' value={name} name='name' onChange={e => setName(e.target.value)} required fullWidth />
                </Grid>

                <Grid display={'flex'} justifyContent={'space-between'}>
                  <Grid item xs={12} md={6} marginBottom={2}>
                    <TextField placeholder='Enter Email' label='Email' value={email} name='email' onChange={e => setEmail(e.target.value)} required />
                  </Grid>
                  <Grid item xs={12} md={6} marginBottom={2}>
                    <TextField placeholder='Enter Phone' label='Phone' value={phone} name='phone' onChange={e => setPhone(e.target.value)} required />
                  </Grid>
                </Grid>

                <Grid item xs={12} marginBottom={2}>
                  <TextField placeholder='Enter Your Message' label='Message' value={message} name='message' onChange={e => setMessage(e.target.value)} required fullWidth />
                </Grid>

                 {loading? 
                  <Grid> <Button variant="contained" color="success" type="submit">
                  Send Message <CircularProgress color="secondary"  fontSize="small" sx={{marginLeft:"10px"}}/>
                </Button>  </Grid> :
                  
                  (<Button variant="contained" color="success" type="submit">
                    Send Message
                  </Button>)}
              </form>
            </Grid>
          </Paper>
        </Box>
      </Layout>
    </>
  )
}

export default Contact