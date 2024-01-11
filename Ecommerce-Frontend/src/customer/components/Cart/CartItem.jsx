import { AddCircleOutlineRounded, RemoveCircleOutlineRounded } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
        </div>
        <div className='ml-5 space-y-1'>
            <p className='font-semibold'>men clothes</p>
            <p className='opacity-70'>size: l, blue</p>
            <p className='opacity-70 mt-2'>seller: Tony</p>

            <div className="flex space-x-5 items-center  text-gray-900 pt-4">
                <p className="font-semibold">Ksh 199</p>
                <p className="opacity-50 line-through">Ksh 332</p>
                <p className="text-green-600 font-semibold">5% off</p>
              </div>
        </div>

      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2'>
                <IconButton>
                    <RemoveCircleOutlineRounded />
                </IconButton>
                <span className='py-1 px-6 border rounded-sm'>3</span>
                <IconButton sx={{color:"RGB(145 85 243)"}}>
                    <AddCircleOutlineRounded />
                </IconButton>
            </div>

            <div>
                <Button sx={{color:"RGB(145 85 243)"}}>Remove</Button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
