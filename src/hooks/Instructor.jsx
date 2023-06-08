import { useEffect, useState } from "react"

const instructor = () =>{
    const [teacher,setTeacher] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('../../public/instructor.json')
        .then(res=>res.json())
        .then(data=>{
            setTeacher(data)
            setLoading(false)
        })
    },[])
    return [teacher,loading]
}
export default instructor