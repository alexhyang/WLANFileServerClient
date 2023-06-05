import React, { useState, useEffect } from 'react'
import Page from 'components/Page'
import SearchBar from 'components/SearchBar'
import Box from '@mui/material/Box'
import { FetchUtils } from '../utils'

export default function Stories() {
  const [keyword, setKeyword] = useState<string>('')
  const [data, setData] = useState<string>('')
  const [subDirs, setSubDirs] = useState<string[]>([])
  useEffect(() => {
    let path, fetchGenerator
    if (keyword == 'list') {
      path = 'search?rootDir=texts'
      fetchGenerator = new FetchUtils<string[]>(path, keyword, setSubDirs)
    } else {
      path = `texts/${keyword}.txt?json=true`
      fetchGenerator = new FetchUtils<string>(path, keyword, setData)
    }
    const fetchData = fetchGenerator.generateFetchDataFunc()
    fetchData()
  }, [keyword])

  return (
    <Page>
      <SearchBar handleSubmit={setKeyword} />
      {keyword == 'list' ? (
        subDirs.map((dir) => <p key={dir}>{dir}</p>)
      ) : (
        <Box
          sx={{
            margin: 'auto',
            width: 'auto',
            pl: '8px',
            py: 2,
            whiteSpace: 'pre-line',
          }}
        >
          {data}
        </Box>
      )}
    </Page>
  )
}
