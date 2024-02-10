import { motion } from "framer-motion";

const UserDetailsCard = ({ user }) => {

    // const { id, image, firstName, lastName, email, address, company } = user;

    return (
        <section className="my-10 p-10 bg-gray-300 rounded-xl flex flex-col justify-start lg:flex-row lg:justify-between gap-10">
            <motion.div className="card bg-base-100 shadow-xl"
                
            >
                <div className="card-body">
                    <h2 className="card-title text-emerald-600 justify-center text-2xl">User profile</h2>
                </div>
                <figure className="px-10 pt-10">
                    <img src={user?.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{user?.firstName + ' ' + user?.lastName}</h2>
                    <div className="divider my-0"></div>
                    <p><span className="font-semibold">Profession:</span> {user?.company?.title}</p>
                    <div className="divider my-0"></div>
                    <p><span className="font-semibold">Email:</span> {user?.email}</p>
                    <div className="divider my-0"></div>
                    <p><span className="font-semibold">Phone:</span> {user?.phone}</p>
                    <div className="divider my-0"></div>
                    <p><span className="font-semibold">Address: </span> {user?.address.address + ', ' + user?.address.city + ', ' + user?.address.state}</p>
                </div>
            </motion.div>
            <motion.div className="bg-base-100 rounded-2xl shadow-xl flex-grow">
                <div className="card-body">
                    <h2 className="card-title text-emerald-600 justify-center text-2xl mb-10">Company</h2>
                    <h2 className="text-xl"><span className="font-semibold">Company Name: </span>{user?.company?.name}</h2>
                    <div className="divider my-0"></div>
                    <p><span className="font-semibold">Department: </span>{user?.company?.department}</p>
                    <div className="divider my-0"></div>
                    <p><span className="font-semibold">Address: </span>{user?.company?.address?.address}</p>
                    {/* <div className="divider my-0"></div> */}
                    <div className="divider my-0"></div>
                    <p><span className="font-semibold">City: </span>{user?.company?.address?.city}</p>
                    <div className="divider my-0"></div>
                    <p><span className="font-semibold">State: </span>{user?.company?.address?.state}</p>
                    <div className="divider my-0"></div>
                    <p><span className="font-semibold">Postal Code: </span>{user?.company?.address?.postalCode}</p>
                </div>
            </motion.div>
        </section>
    )
}

export default UserDetailsCard