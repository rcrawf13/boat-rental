import { useEffect,useState } from "react";
import { Navigate, useNavigate } from "react-router";
import './navbar.css';

const 
NavBar = ({navButtonOptions, Link}) => {
        const [url,setUrl] = useState();
        const navigate = useNavigate();

        useEffect(()=>{
            navigate(url)
        },[url])

        useEffect(() => {
        // Ensure we're at the top of the page
        window.scrollTo(0, 1);

    }, []);




    return (
        <>
            <nav className="navConatiner">
                {navButtonOptions.map((navOption) => {
                    return(
                        <Link 
                            smooth={true} 
                            activeClass="active" 
                            spy={true} 
                            to={navOption} 
                            key={navOption}
                            duration={100}
                            onSetActive={()=>{setUrl(navOption.toLocaleLowerCase())}}
                        >
                            {navOption}
                        </Link>
                    );   
                })}
            </nav>
        </>
    )
}

export default NavBar