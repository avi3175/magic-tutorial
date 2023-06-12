import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react'
// import { AuthContext } from '../Provider/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'
const userStack = () => {
  // const { user } = useContext(AuthContext)
  // console.log(user)
const{user,loading} = useAuth()
  const token = localStorage.getItem('access token')
  const [axiosSecure] = useAxiosSecure()

  const { data: cart = [], refetch } = useQuery({
    queryKey: ['cart', user?.email],
    enabled:!loading,
    // queryFn: async ()=>{
    //     const response = await fetch(`https://magic-server.vercel.app/cart?email=${user.email}`,{headers:{
    //       authorization:`bearer ${token}`
    //     }})
    //     return response.json()
    // },

//////////////////////////////////////////////////////////////////////////////////////////////////
// -------------------------------upto this is very much ok-------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

    queryFn: async () => {
      const res = await axiosSecure(`/cart?email=${user.email}`)
      console.log('res from axios', res)
      return res.data
    },



  })
  return [cart, refetch]

}
export default userStack