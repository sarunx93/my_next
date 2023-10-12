'use client'
//hooks
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

//components
import ProfileComp from '@components/Profile'

const Profile = () => {
  const { data:session } = useSession()
  const router = useRouter()
  const [posts, setPosts] = useState([])

  const handleEdit = (post)=>{
    router.push(`/update-prompt?id=${post._id}`)
  }
  
  const handleDelete = async(post) => {
    const hasConfirmed = confirm('Are you sure to delete this prompt?')
    console.log(hasConfirmed)
    if(hasConfirmed){
      try {
        await fetch(`/api/prompt/${post._id.toString()}`,{
          method: 'DELETE'
        })
        const filteredPost = posts.filter((p)=>p._id !== post._id)
        setPosts(filteredPost)
      } catch (error) {
        console.log(error)
      }
    }
  }
 
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const response = await fetch(`api/users/${session?.user.id}/posts`)
      const data = await response.json()
      setPosts(data)
    }
   if(session?.user.id) fetchPosts()
  },[session?.user.id])
  
  
  return (
    <ProfileComp
      name='my'
      desc='Welcome to my profile page.'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}/>
  )
}

export default Profile