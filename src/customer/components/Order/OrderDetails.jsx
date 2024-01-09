import React from 'react'
import OrderCard from './OrderCard'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { StarBorderOutlined } from '@mui/icons-material'

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-lg py-7'>Deliver Address</h1>
        <AddressCard />
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid className='space-y-5' container>
            {[1,1,1,1].map((item) => 
            <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems: "center", justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Men</p>
                            <p className='space-x-5 opacity-50 text-sm font-semibold'><span>Color: pink</span>Size: M</p>
                            <p>Seller: Tony</p>
                            <p>Ksh 354</p>
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color: 'deepPurple[500]'}}>
                        <StarBorderOutlined sx={{fontSize:"2rem"}} className='px-2' />
                        <span>Rate & Review</span>
                    </Box>
                </Grid>
            </Grid>)}
            
        </Grid>
    </div>
  )
}

export default OrderDetails
