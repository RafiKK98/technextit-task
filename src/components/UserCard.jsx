import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    const { id, image, firstName, lastName, email, address, company } = user;

    return (
        <motion.div className="card max-w-xs mx-auto bg-white shadow-xl"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1}}
        >
            <figure className="pt-2 px-2">
                <img src={image} alt="avatar" className=" border border-black rounded-xl" />
            </figure>
            <div className="card-body">
                <Link to={`/user/${id}`}>
                    <h2 className="card-title text-emerald-600 hover:text-emerald-500 hover:underline">{firstName + ' ' + lastName}</h2>
                </Link>
                <p><span className="font-semibold">Email:</span> {email}</p>
                <p><span className="font-semibold">Address:</span> {address.address + ', ' + address.city + ', ' + address.state}</p>
                <p><span className="font-semibold">Company:</span> {company.name}</p>
            </div>
        </motion.div>
    )
}

export default UserCard