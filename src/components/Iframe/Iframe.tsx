import { videos } from './data'
import React from 'react'

const Iframe = () => {
  const sortedVideos = Math.floor(Math.random() * videos.length)
  return (
    <iframe src={videos[sortedVideos]?.url} className='mt-10 lg:w-[65rem] md:h-[40rem] w-screen h-[20rem]'/>
  )
}

export default Iframe