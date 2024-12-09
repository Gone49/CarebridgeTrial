import React, { ReactNode } from 'react'

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
