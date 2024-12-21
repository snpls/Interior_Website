import React, { ButtonHTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'

const buttonCVA = cva('px-4 py-2 border border-black font-semibold text-sm',{
    variants: {
        variant:{
            white: 'bg-white text-black shadow-full-black transition-all duration-500 hover:text-white hover:bg-black hover:shadow-full-gray',
            black: 'bg-black text-white shadow-full-gray'
        }
    }
})

export default function Button(props: {
    variant: 'white' | 'black'} 
    & ButtonHTMLAttributes<HTMLButtonElement>) {
    
    const {variant,className,children,...otherProps} = props

  return (
    <button className={buttonCVA({variant,className})}{...otherProps}>
        {children}
    </button>
  )
}
