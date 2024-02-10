import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import useUsers from "../hooks/useUsers"
import Swal from "sweetalert2";
import SearchAndFilter from "../components/SearchAndFilter";
import AddUserForm from "../components/AddUserForm";
import { Helmet } from "react-helmet";

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
        <>
            <Helmet>
                <title>UsersHUB || Users List</title>
            </Helmet>
            <h2 className="mt-10 px-2 text-4xl font-semibold text-center lg:text-start">Users List</h2>
            <SearchAndFilter handleSearch={handleSearch} handleSort={handleSort} />
            <div className="bg-gray-300 mx-auto my-5 p-5 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    showUsers.map((showUser, idx ) => (
                        <UserCard key={idx} user={showUser} />
                    ))
                }
            </div>
            <AddUserForm handleAddUser={handleAddUser} />
        </>
    )
}

export default AllUsers