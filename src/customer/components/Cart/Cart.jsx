import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'

const Cart = () => {
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
            {[1,1,1].map((item) => <CartItem />)}
            </div>
            <div className='px-5 sticky top-0 h-[100v] mt-5 lg:mt-0'>
                <div className='border'>
                    <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                    <hr />
                    <div className='space-y-3 font-semibold mb-5'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price(3)</span>
                            <span>Ksh 300</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Discount</span>
                            <span className='text-green-600'>Ksh 300</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Delivery charges</span>
                            <span className='text-green-600'>Ksh 300</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Total Amount</span>
                            <span className='text-green-600'>Ksh 2300</span>
                        </div>
                    </div>
                    <Button
                    className='w-full'
                  variant="contained"
                  sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                >
                  Checkout
                </Button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Cart
