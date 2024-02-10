import { motion } from "framer-motion"



const AddUserForm = ({ handleAddUser }) => {
    return (
        <motion.div className="bg-gray-300 my-5 p-5 rounded-xl"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1}}
        >
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
                                <span className="label-text">Address (Street)</span>
                            </label>
                            <input type="text" name="address" placeholder="Address Street" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address (City)</span>
                            </label>
                            <input type="text" name="city" placeholder="Address City" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address (State)</span>
                            </label>
                            <input type="text" name="state" placeholder="Address State" className="input input-bordered" required />
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
        </motion.div>
    )
}

export default AddUserForm