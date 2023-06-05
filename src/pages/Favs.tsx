import React, { useState, useEffect, ChangeEvent } from 'react'
import Page from 'components/Page'
import MediaList from 'components/MediaList'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { IP } from '../env'

export default function Images() {
  const [input, setInput] = useState<string>('')
  const [subject, setSubject] = useState('')
  const [data, setData] = useState<string[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const handleSubmit = () => {
    setSubject(input)
  }
  const reset = () => {
    setSubject('')
    setInput('')
    setData([])
  }

  useEffect(() => {
    if (subject != '') {
      fetch(`http://${IP}:4000/search?cat=favs&key=${subject}`)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then((data) => setData(data))
        .catch((err) => {
          console.error('Error: ', err)
        })
    }
  }, [subject])

  return (
    <Page>
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
              onClick={handleSubmit}
              sx={{ width: '100%', height: '100%' }}
            >
              Search
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button onClick={reset} sx={{ width: '100%', height: '100%' }}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Box>
      {subject == '' || data.length == 0 ? null : <MediaList data={data} />}
    </Page>
  )
}
