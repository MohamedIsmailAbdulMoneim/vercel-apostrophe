import Image from "next/image"

import classes from "./main-header.module.css"
import logo from "@/assets/logo.png"
import AccountMenu from "../tooltip/tooltip"

const MainHeader = () => {
  return (
    <header className={classes.container}>
      <nav className={classes['nav-container']}>
          <div className={classes.btn}>
            <AccountMenu  /> 
          </div>
        </nav>
        <a className={classes.logo} href="https://apostrophe.com.tr/">
            <Image height="80" src={logo} alt="logo" />
            <div>
                <p className={classes["logo__description"]}>Apostrophe Educational Center</p>
                <span>Shortn Your Path To Success</span>
            </div>
            
        </a>
        
    </header>
  )
}

export default MainHeader