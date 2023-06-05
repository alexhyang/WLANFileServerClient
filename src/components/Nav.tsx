import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar variant="regular" sx={{ background: '#666', gap: 2 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              href="/"
              color="#FFF"
              underline="none"
              sx={{ '&:hover': { color: '#FFF' } }}
            >
              Test App
            </Link>
          </Typography>
          <Link
            href="/images"
            color="#FFF"
            underline="hover"
            sx={{ '&:hover': { color: '#FFF' } }}
          >
            Images
          </Link>
          <Link
            href="/stories"
            color="#FFF"
            underline="hover"
            sx={{ '&:hover': { color: '#FFF' } }}
          >
            Stories
          </Link>
          <Link
            href="/videos"
            color="#FFF"
            underline="hover"
            sx={{ '&:hover': { color: '#FFF' } }}
          >
            Videos
          </Link>
          <Link
            href="/favs"
            color="#FFF"
            underline="hover"
            sx={{ '&:hover': { color: '#FFF' } }}
          >
            Favs
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
