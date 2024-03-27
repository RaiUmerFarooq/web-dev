import React from "react"
import { Link } from "react-router-dom"
export default function Nav(){
  
    return(
        
        <>
        <div clLinkssName="Nav">
            <div clLinkssName="center">

            <Link to='/Home' className="home">Home </Link>
            <Link to="/Contact" className="product"> Contact </Link>
            <Link to="/About" className="update"> About </Link>
            
            </div>
        </div>
        </>
    )
}