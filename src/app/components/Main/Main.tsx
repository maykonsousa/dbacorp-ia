import { Box } from '@mui/material'
import React from 'react'


interface MainProps {
    children: React.ReactNode
}

export const Main = ({children}: MainProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 90px)',
        width: '100%',
        maxWidth: '1080px',
        margin: '0 auto',
      }}
    >{children}</Box>
  )
}
