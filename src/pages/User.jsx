import { useParams } from "react-router-dom"
import useSingleUser from "../hooks/useSingleUser";
import UserDetailsCard from "../components/UserDetailsCard";
import { Helmet } from "react-helmet";

const User = () => {

    const { id } = useParams();

    const [user, usersLoading] = useSingleUser(id);

    return (
        <>
            <Helmet>
                <title>UsersHUB || User Details</title>
            </Helmet>
            <h2 className="mt-10 px-2 text-4xl font-semibold text-center lg:text-start">User Details</h2>
            {
                usersLoading? <progress className="progress progress-secondary"></progress>
                : <UserDetailsCard user={user} />
            }
        </>
    )
}

export default User