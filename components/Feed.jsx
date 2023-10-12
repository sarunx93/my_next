'use client'

import React, {useState, useEffect} from 'react'
import PromptCard from './PromptCard'

const PrompCardList = ({data, handleTagClick})=>{
  return ( 
    <div className="mt-16 prompt_layout">
      {data.map((post,i)=>(
        <PromptCard 
          key={i}
          post={post}
          handleTagClick={handleTagClick}/>
      ))}
    </div>
  )
}


const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])
  const handleSearchChange = (e)=>{
    setSearchText(e.target.value)
  }
  
  const fetchPosts = async ()=>{
    const response = await fetch('api/prompt')
    const data = await response.json()
    setPosts(data)
  }

  useEffect(()=>{
    fetchPosts()
  },[])
    

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input 
          type="text"
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required 
          className='search_input peer'/>
      </form>

      <PrompCardList
        data={posts}
        handleTagClick={()=>{}}/>
    </section>
  )
}

export default Feed