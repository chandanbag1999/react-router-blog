import React,{useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()
// const [data, setData] = useState([])
// useEffect(() => {
//     fetch('https://api.github.com/users/cbag67612')
//     .then((res) => res.json())
//     .then((data) => setData(data))
// }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg" alt="Git pitcure" width={300} />
    </div>
  )
}

export default Github

export const GithubLoader = async () => {
    const respons = await fetch('https://api.github.com/users/cbag67612')
    return respons.json()
}