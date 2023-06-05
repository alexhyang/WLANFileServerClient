import React, { useState, ChangeEvent } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function SearchBar(props: {
  handleSubmit: React.Dispatch<React.SetStateAction<string>>
}) {
  const [input, setInput] = useState<string>('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{ width: '100%', ml: 0, gy: '5px' }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            id="url-name"
            label="Name"
            value={input}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            onClick={() => props.handleSubmit(input)}
            sx={{ width: '100%', height: '100%' }}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            onClick={() => {
              setInput('')
              props.handleSubmit('')
            }}
            sx={{ width: '100%', height: '100%' }}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
