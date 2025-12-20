import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router";
import './navbar.css';
const NavBar = ({navButtonOptions}) => {
    
    interface locationObj {
        hash: String;
        key: String;
        pathname: String;
        search: String;
        state: any;
    }
    const navigate = useNavigate()

    const [selected,setSelected] = useState("");

    const handleAnchorClick = (item:string,e) => {
        // Update state to remember which nav button is selected
        setSelected(item);
        console.log(item)
        // Update url to reflect selected nav option
        navigate(`/${item}`)

        //
        // The following lines prevent the URL from being updated when
        // the anchor is clicked
        //
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({behavior:'smooth'})
        }


    }

    // const location:locationObj = useLocation(); // Returns an object

    if (location.pathname === "/") {
        location.pathname = "/Home";
        navigate("/Home")
    }
  return (
    <>
        <nav className="navConatiner">
            {navButtonOptions.map((currentItem:string, index:number)=>
            ( 
                <a 
                // decodeURIComponent(`#${currentItem}`.toLocaleLowerCase())
                href={currentItem === "About Us"? `#about`:decodeURIComponent(`#${currentItem}`.toLocaleLowerCase())}
                key={`listItem-${index}`} 
                className={decodeURIComponent(location.pathname) === `/${currentItem}`?'active':''} 
                onClick={(e)=>handleAnchorClick(currentItem,e)}
                >
                    {currentItem}
                </a>
            )
                )
            }
        </nav>
    
    </>
    )
}

export default NavBar