import HomeSec from "./sections/home_section/HomeSec";
import AboutSec from "./sections/about_section/AboutSec";
import ContactSec from "./sections/contact_section/ContactSec";

const SectionBase = ({navButtonOption,Element}) => {




  return (
    <Element name={navButtonOption}>
      <section
      id={`${navButtonOption === "About Us"?"about":navButtonOption}`.toLocaleLowerCase()} 
    >
          {navButtonOption === "Home"?<HomeSec/>:""}
          {navButtonOption === "About Us"?<AboutSec/>:""}
          {navButtonOption === "Contact"?<ContactSec/>:""}
      </section>
    </Element>
)
}

export default SectionBase