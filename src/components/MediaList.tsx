import * as React from 'react'
import Box from '@mui/material/Box'

export default function Images(props: { data: string[] }) {
  const videoFormats = ['.mp4', '.mov', '.rmvb']
  return (
    <Box
      sx={{
        margin: 'auto',
        width: 'auto',
      }}
    >
      {props.data.map((item: string) => (
        <Box key={item} my={1} sx={{ maxWidth: '100%' }}>
          {videoFormats.includes(item.slice(-4)) ? (
            <video src={item} controls muted width="100%"></video>
          ) : (
            <img src={item} srcSet={item} loading="lazy" width="100%" />
          )}
        </Box>
      ))}
    </Box>
  )
}
