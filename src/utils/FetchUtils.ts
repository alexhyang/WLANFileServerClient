import React from 'react'
import { IP } from '../env'

export default class FetchUtils<T> {
  path: string
  keyword: string
  setData: React.Dispatch<React.SetStateAction<T>>

  constructor(
    path: string,
    keyword: string,
    setData: React.Dispatch<React.SetStateAction<T>>
  ) {
    this.path = path
    this.keyword = keyword
    this.setData = setData
  }

  generateFetchDataFunc(): () => void {
    const fetchData = async () => {
      try {
        if (this.keyword !== '') {
          const response = await fetch(`http://${IP}:4000/${this.path}`)
          const result: T = await response.json()
          this.setData(result)
        }
      } catch (err) {
        console.log(err)
      }
    }
    return fetchData
  }
}
