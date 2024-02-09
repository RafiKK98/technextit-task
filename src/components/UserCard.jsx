import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    const { id, image, firstName, lastName, email, address, company } = user;

    return (
        <div className="card max-w-xs mx-auto bg-base-300 shadow-xl">
            <figure className="pt-2 px-2">
                <img src={image} alt="avatar" className=" border border-black rounded-xl" />
            </figure>
            <div className="card-body">
                <Link to={`/user/${id}`}>
                    <h2 className="card-title hover:underline">{firstName + ' ' + lastName}</h2>
                </Link>
                <p>Email: {email}</p>
                <p>Address: {address.address + ', ' + address.city + ', ' + address.state}</p>
                <p>Company: {company.name}</p>
            </div>
        </div>
    )
}

export default UserCard