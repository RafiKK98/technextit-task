import { motion } from "framer-motion"


const SearchAndFilter = ({ handleSearch, handleSort}) => {
    return (
        <motion.div className="px-2 mt-10 flex flex-col lg:flex-row items-center lg:justify-between gap-10"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1}}
        >
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
                </div>
                <select className="select select-bordered select-primary w-full" onChange={handleSort}>
                    <option selected value={`all`}>All</option>
                    <option value={`name`}>Name</option>
                    <option value={`email`}>Email</option>
                    <option value={`company`}>Company Name</option>
                </select>
            </label>
        </motion.div>
    )
}

export default SearchAndFilter