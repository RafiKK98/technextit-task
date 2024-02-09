import { useEffect, useState } from "react";
import useUsers from "./useUsers"

const useSingleUser = (id) => {
    
    const [users, ] = useUsers();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = users.filter(user => user.id == id);
        setUser(currentUser[0]);
    }, [id, users]);
    
    return user;
}

export default useSingleUser