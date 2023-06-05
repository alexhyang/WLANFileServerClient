import React from 'react'
import Container from '@mui/material/Container'
import Nav from './Nav'

interface IProps {
  children: React.ReactNode
}

export default function Page(props: IProps) {
  return (
    <>
      <Nav />
      <Container
        sx={{
          px: '5px',
          py: 2,
          mt: '72px',
          '@media  (min-width: 600px)': {
            px: 3,
          },
          '@media  (min-width: 948px)': {
            px: 10,
          },
        }}
      >
        {props.children}
      </Container>
    </>
  )
}
