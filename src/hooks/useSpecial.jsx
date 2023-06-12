import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"

const useSpecial = () =>{
    const { user } = useAuth()

    const { isLoading, data: cart = [] } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/class?email=${user.email}`)
            return res.json()
        }
    })

    return [isLoading,cart]
}
export default useSpecial