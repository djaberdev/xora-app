import { Link as LinkScroll } from "react-scroll";
import { navLinks } from "../constants";
import SocialsPanel from "../components/SocialsPanel.jsx";
import FooterInput from "../components/FooterInput.jsx";

const Footer = () => {
    return (
        <footer>
            <div className="flex bg-s2 max-lg:flex-col-reverse">
                {/* Left Part */}
                <div className="relative py-25 px-16 xl:pl-30 lg:pl-10 max-lg:px-10 max-md:px-6 flex flex-col gap-26 w-1/2 bg-s1 max-lg:w-full max-lg:pt-20 max-lg:pb-12">
                    <div className="absolute top-[65px] -right-[37.5px] size-[75px] bg-s1 flex-center-all rounded-circle border-1 border-s3/20 z-3 select-none max-lg:right-1/2! max-lg:translate-x-[50%] max-lg:-top-[37.5px] max-md:hidden">
                        <img 
                            src="/assets/faq-logo.svg" 
                            alt="xora logo"
                            className="object-contain"
                        />
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-50 h-50 bg-s4 blur-[150px] rounded-full z-0" />
                    <div className="absolute -top-1/4 -right-[250px] z-0 select-none max-lg:right-1/2 max-lg:translate-x-1/2 max-lg:-top-[150px] max-md:-right-[180px] max-md:translate-x-0 max-md:-top-[200px] max-md:scale-[0.8]">
                        <img 
                            src="/assets/faq-logo.svg"
                            alt="footer logo" 
                            className="w-[500px] grayscale-100 opacity-[3%]"
                        />
                    </div>
                    <div className="relative z-1 flex-1 flex flex-col items-start gap-10">
                        {navLinks.map((navLink) => (
                            <LinkScroll
                                to={navLink.title}
                                smooth
                                offset={0}
                                className="text-p5/90 text-3xl font-semibold capitalize transition-colors duration-300 hover:text-p1 cursor-pointer"
                            >
                                {navLink.title}
                            </LinkScroll>
                        ))}
                    </div>
                    
                    <div className="flex-center-between gap-4 relative z-1 max-md:flex-wrap">
                        <p className="text-p5/70 text-xs font-medium">&copy; Copyright Djaber Touati.</p>

                        <ul className="flex items-center gap-4">
                            <li className="text-xs font-semibold text-p5/90 transition-colors hover:text-p1"><a href="#">Privacy policy</a></li>
                            <span className="w-1 h-1 rounded-circle bg-s4"></span>
                            <li className="text-xs font-semibold text-p5/90 transition-colors hover:text-p1"><a href="#">Terms of service</a></li>
                        </ul>
                    </div>
                </div>
                
                {/* Right Part */}
                <div className="relative z-2 g7 w-1/2 py-25 px-16 xl:pl-30 lg:pl-20 max-lg:px-10 max-md:px-6 flex flex-col gap-26 max-lg:gap-12 max-lg:w-full max-md:hidden">
                    <div className="flex-1">
                        <h1 className="text-p4 text-[40px] leading-[40px] font-semibold">Subscribe</h1>
                        <p className="body-1 mt-2 mb-6 max-w-[400px]">Sign up to our newsletter for feature updates and our undying love.</p>
                        <FooterInput />
                    </div>

                    <SocialsPanel />
                </div>
            </div>
        </footer>
    );
};

export default Footer;