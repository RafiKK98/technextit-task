import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import useUsers from "../hooks/useUsers"
import Swal from "sweetalert2";

const AllUsers = () => {

    const [users, usersLoading, usersLoadingError] = useUsers();

    const [ showUsers, setShowUsers ] = useState([]);
    // const [ filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        setShowUsers(users);
    }, [users]);

    const handleSearch = event => {
        const searchTerm = event.target.value;
        const filteredUsers = users.filter((user) => (
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
                const filteredUsers = showUsers.toSorted((userA, userB) => {
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

    const handleAddUser = event => {
        event.preventDefault();
        const formData = event.target;
        const firstNameValue = formData.firstName.value;
        const lastNameValue = formData.lastName.value;
        const imageValue = formData.image.value;
        const emailValue = formData.email.value;
        const addressValue = formData.address.value;
        const cityValue = formData.city.value;
        const stateValue = formData.state.value;
        const companyNameValue = formData.companyName.value;
        const userObject = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            image: imageValue,
            email: emailValue,
            address: {
                address: addressValue,
                city: cityValue,
                state: stateValue,
            },
            company: {
                name: companyNameValue,
            },
        };
        console.log(userObject);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User has been added!",
            showConfirmButton: false,
            timer: 1500
        })
        setShowUsers([...showUsers, userObject]);
    }

    if (usersLoading) return <progress className="progress progress-secondary"></progress>
    if (usersLoadingError) return 'An error has occurred: ' + usersLoadingError.message;

    return (
        // usersLoading ? 
        // <progress className="progress progress-secondary"></progress>
        // :
        <>
            <h2 className="mt-10 px-2 text-4xl font-semibold text-center lg:text-start">Users List</h2>
            <div className="px-2 mt-10 flex flex-col lg:flex-row items-center lg:justify-between gap-10">
                <label className="form-control w-3/4 lg:w-1/2">
                    <div className="label">
                        <span className="label-text">Search using name</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Search Here"
                        className="input input-bordered input-primary w-full"
                        onChange={handleSearch}
                    />
                </label>
                <label className="form-control w-3/4 lg:w-1/2">
                    <div className="label">
                        <span className="label-text">Sort by-</span>
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </div>
                    <select className="select select-bordered select-primary w-full" onChange={handleSort}>
                        <option selected value={`all`}>All</option>
                        <option value={`name`}>Name</option>
                        <option value={`email`}>Email</option>
                        <option value={`company`}>Company Name</option>
                    </select>
                </label>
            </div>
            <div className="bg-gray-300 mx-auto my-5 p-5 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    showUsers.map((showUser, idx ) => (
                        <UserCard key={idx} user={showUser} />
                    ))
                }
            </div>
            <div className="bg-gray-300 my-5 p-5 rounded-xl">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddUser} className="card-body">
                        <h2 className="text-2xl font-medium text-center">Add a User</h2>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Avatar Link</span>
                                </label>
                                <input type="text" name="image" placeholder="Avatar Link" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="divider col-span-2"></div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="address" placeholder="Address Street" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="city" placeholder="Address Suite" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="state" placeholder="Address City" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company</span>
                                </label>
                                <input type="text" name="companyName" placeholder="Company Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AllUsers