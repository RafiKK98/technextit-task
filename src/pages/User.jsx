import { useParams } from "react-router-dom"
import useSingleUser from "../hooks/useSingleUser";

const User = () => {

    const { id } = useParams();

    const user = useSingleUser(id);

    return (
        <div>User {id}: {user?.firstName} </div>
    )
}

export default User