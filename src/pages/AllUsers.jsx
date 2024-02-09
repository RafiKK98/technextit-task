import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import useUsers from "../hooks/useUsers"

const AllUsers = () => {

    const [users, usersLoading, usersLoadingError] = useUsers();

    const [ showUsers, setShowUsers ] = useState([]);
    // const [ filteredUsers, setFilteredUsers] = useState([]);



    useEffect(() => {
        setShowUsers(users);
    }, [users]);

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        const filteredUsers = showUsers.filter((user) => (
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
            || user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        setShowUsers(filteredUsers);
    };

    const handleSort = event => {
        const filterOption = event.target.value;
        console.log(filterOption);
        switch (filterOption) {
            case 'name': {
                const filteredUsers = users.toSorted((userA, userB) => {
                    const nameA = userA.firstName + ' ' + userA.lastName;
                    const nameB = userB.firstName + ' ' + userB.lastName;
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                })
                setShowUsers(filteredUsers);
            }
                break;
            case 'email': {
                const filteredUsers = users.toSorted((userA, userB) => {
                    if (userA.email < userB.email) {
                        return -1;
                    }
                    if (userA.email > userA.email) {
                        return 1;
                    }
                    return 0;
                })
                setShowUsers(filteredUsers);
            }
                break;
            case 'company':{
                const filteredUsers = users.toSorted((userA, userB) => {
                    if (userA.company.name < userB.company.name) {
                        return -1;
                    }
                    if (userA.company.name > userA.company.name) {
                        return 1;
                    }
                    return 0;
                })
                setShowUsers(filteredUsers);
            }
                break;
            default:
                setShowUsers(users);
                break;
        }
        
    };

    if (usersLoading) return <progress className="progress progress-secondary"></progress>
    if (usersLoadingError) return 'An error has occurred: ' + usersLoadingError.message;

    return (
        // usersLoading ? 
        // <progress className="progress progress-secondary"></progress>
        // :
        <>
            <h2 className="mt-10 text-4xl text-center font-semibold">Users List</h2>
            <div className="px-2 mt-10 flex flex-col lg:flex-row items-center lg:justify-between gap-10">
                <label className="form-control w-3/4 lg:w-1/2">
                    <div className="label">
                        <span className="label-text">Search using name</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Search Here"
                        className="input input-bordered w-full"
                        onChange={handleSearch}
                    />
                </label>
                <label className="form-control w-3/4 lg:w-1/2">
                    <div className="label">
                        <span className="label-text">Sort by-</span>
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </div>
                    <select className="select select-bordered" onChange={handleSort}>
                        <option selected value={`all`}>All</option>
                        <option value={`name`}>Name</option>
                        <option value={`email`}>Email</option>
                        <option value={`company`}>Company Name</option>
                    </select>
                </label>
            </div>
            <div className="mt-4 mx-auto flex justify-center">
                {/* <select value={sortBy} onChange={handleSort}>
                    <option value="name">Sort by Name</option>
                    <option value="email">Sort by Email</option>
                    <option value="company">Sort by Company Name</option>
                </select> */}
            </div>
            <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-5 my-10">
                {
                    showUsers.map((showUser, idx ) => (
                        <UserCard key={idx} user={showUser} />
                    ))
                }
            </div>
        </>
    )
}

export default AllUsers