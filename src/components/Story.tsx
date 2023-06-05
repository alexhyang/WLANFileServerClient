import React from 'react'

interface IProps {
  title: string
  content: string
}

export default function Story(props: IProps) {
  return (
    <div>
      <div>Title: {props.title}</div>
      <div>
        Content:
        <p>{props.content}</p>
      </div>
    </div>
  )
}
