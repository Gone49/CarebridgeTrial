import React, { ReactNode } from 'react'
import {Toaster} from 'react-ho'

export default function Provider({children} :{children :ReactNode}) {
  return (
    <div>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        {children}
    </div>
  )
}
