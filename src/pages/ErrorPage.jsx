import { motion } from "framer-motion"
import { Helmet } from "react-helmet"

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>UsersHUB || Error Page</title>
            </Helmet>
            <section className="h-screen flex flex-col justify-center">
                <motion.h1 className="text-4xl font-semibold text-center"
                    initial={{ opacity: 0, color: 'black' }}
                    animate={{ opacity: 1, color: '#047857' }}
                    transition={{ duration: 1 }}
                >
                    <span className="">404 Error: Page not found!</span>
                </motion.h1>
            </section>
        </>
    )
}

export default ErrorPage