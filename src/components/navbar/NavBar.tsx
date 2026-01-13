import { useEffect,useState } from "react";
import { useNavigate } from "react-router";
import './navbar.css';

interface NavBarProps {
    navButtonOptions: string[];
    Link: React.ElementType;
}

const NavBar = ({navButtonOptions, Link}:NavBarProps) => {
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
                {navButtonOptions.map((navOption:string) => {
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