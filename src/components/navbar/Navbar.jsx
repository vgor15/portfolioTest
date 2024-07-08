import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
        {/* SIDEBAR */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            >Vyom Gor</motion.span>
            <div className="social">
                <a href="https://www.facebook.com/vyom.gor.58/"><img src="./facebook.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/vyom-gor-36495823a"><img src="./linkedin.png" alt="" /></a>
                <a href="https://github.com/dashboard"><img src="./github.png" alt="" /></a>
                <a href="https://www.instagram.com/iamvyom_gor/"><img src="./instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar




