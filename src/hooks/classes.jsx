import { useEffect, useState } from "react"

const allClass = () =>{
    const [school,setSchool] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://magic-server.vercel.app/class')
        .then(res=>res.json())
        .then(data=>{
            setSchool(data)
            setLoading(false)
        })
       
    },[])
    return [school,loading]
}
export default allClass
