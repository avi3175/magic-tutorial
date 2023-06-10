import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
const userStack = () =>{
        const {user} = useContext(AuthContext)
        const { data:cart=[],refetch } = useQuery({
            queryKey: ['users',user?.email],
            queryFn: async ()=>{
                const response = await fetch(`http://localhost:5000/users`)
                return response.json()
            },
          })
        return [cart,refetch]
        
}
export default userStack