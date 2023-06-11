import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
// import useAxiosSecure from './useAxiosSecure'
// import useAuth from './useAuth'
const userStack = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  const token = localStorage.getItem('access token')
  // const [axiosSecure] = useAxiosSecure()

  const { data: cart = [], refetch } = useQuery({
    queryKey: ['cart', user?.email],

    queryFn: async ()=>{
        const response = await fetch(`http://localhost:5000/cart?email=${user.email}`,{headers:{
          authorization:`bearer ${token}`
        }})
        return response.json()
    },



    // queryFn: async () => {
    //   const res = await axiosSecure(`/cart?email=${user.email}`)
    //   console.log('res from axios', res)
    //   return res.data
    // },



  })
  return [cart, refetch]

}
export default userStack