import React, { useState, useEffect } from 'react'
import Page from 'components/Page'
import SearchBar from 'components/SearchBar'
import MediaList from 'components/MediaList'
import { FetchUtils } from '../utils/'

export default function Media(props: { mediaType: string }) {
  const [keyword, setKeyword] = useState<string>('')
  const [data, setData] = useState<string[]>([])
  useEffect(() => {
    let path
    if (keyword == '>dir') {
      path = `search?rootDir=${props.mediaType}`
    } else {
      path = `search?cat=${props.mediaType}&key=${keyword}`
    }
    const fetchGenerator = new FetchUtils<string[]>(path, keyword, setData)
    const fetchData = fetchGenerator.generateFetchDataFunc()
    fetchData()
  }, [keyword])

  return (
    <Page>
      <SearchBar handleSubmit={setKeyword} />
      {keyword == '>dir' ? (
        data.map((dir) => <p key={dir}>{dir}</p>)
      ) : keyword == '' || data.length == 0 ? null : (
        <MediaList data={data} />
      )}
    </Page>
  )
}
