import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useUsers = () => {
    
    // https://dummyjson.com/users
    
    const {data: users = [], isLoading: usersLoading, error: usersLoadingError } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://dummyjson.com/users');
            return res.data.users;
        }
    });

    return [users, usersLoading, usersLoadingError];
}

export default useUsers