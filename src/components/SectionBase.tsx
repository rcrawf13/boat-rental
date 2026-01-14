import HomeSec from "./sections/home_section/HomeSec";
import AboutSec from "./sections/about_section/AboutSec";
import ContactSec from "./sections/contact_section/ContactSec";
import PriceSec from "./sections/pricing_section/PriceSec";

interface SectionBaseProps {
navButtonOption:string
Element: React.ElementType
}
const SectionBase = ({navButtonOption,Element}:SectionBaseProps) => {




  return (
    <Element name={navButtonOption}>
      <section
      id={`${navButtonOption === "About Us"?"about":navButtonOption}`.toLocaleLowerCase()} 
    >
          {navButtonOption === "Home"?<HomeSec/>:""}
          {navButtonOption === "About Us"?<AboutSec/>:""}
          {navButtonOption === "Pricing"?<PriceSec/>:""}
          {navButtonOption === "Contact"?<ContactSec/>:""}
      </section>
    </Element>
)
}

export default SectionBase