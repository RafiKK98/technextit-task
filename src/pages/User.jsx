import { useParams } from "react-router-dom"
import useSingleUser from "../hooks/useSingleUser";
import UserDetailsCard from "../components/UserDetailsCard";

const User = () => {

    const { id } = useParams();

    const [user, usersLoading] = useSingleUser(id);

    return (
        <>
            <h2 className="mt-10 px-2 text-4xl font-semibold text-center lg:text-start">User Details</h2>
            {/* <div className="text-md breadcrumbs">
                <ul>
                    <li><a>Home</a></li>
                    <li>User Details  </li>
                    <li>{user?.firstName + ' ' + user?.lastName}</li>
                </ul>
            </div> */}
            {
                usersLoading? <progress className="progress progress-secondary"></progress>
                : <UserDetailsCard user={user} />
            }
        </>
    )
}

export default User