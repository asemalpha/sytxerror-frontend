import "./Company.css"
import axios from "axios"
import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

function Company() {
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(false)

const navigate = useNavigate()

useEffect(()=>{
  setIsLoading(true)
  axios.get("http://localhost:5005/company").then((result) =>{
    setData(result.data.Company);
  }).catch((err)=>{
    console.log("err:", err)
    setIsError(true)
  }).finally(()=>{
    setIsLoading(false)
  })
},[]);
if (isLoading){
  return <div>Getting data....</div>
}
if (isError){
  return <div>Ooops</div>
}

  return (
    <div>
      <h1>Companies</h1>
      <div>
        {data.map((Company)=>{
          return (
            <article
            key={Company.slug}
            onClick={()=>{
              navigate(`/company/${Company.slug}`)
            }}
            style={{cursor: "pointer"}}
            >
              
            </article>
          )
        })}
      </div>

      </div>
  )
}

export default Company