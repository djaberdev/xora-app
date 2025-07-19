import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";
import SocialsPanel from "../components/SocialsPanel.jsx";

const NavLink = ({ title }) => (
    <LinkScroll 
        to={title} 
        smooth 
        spy 
        offset={-100}
        activeClass="nav-active"
        className="realtive text-white uppercase text-base font-medium duration-500 hover:text-p1 max-lg:text-4xl cursor-pointer"
    >
        {title}
    </LinkScroll>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setHasScrolled(window.scrollY > 32);
        
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    return (
        <header className={clsx("py-7 fixed top-0 left-0 z-20 w-full flex-center-all duration-700", hasScrolled && "py-3.5! bg-dark-s1/95 backdrop-blur-[15px]")}>
            <div className="relative z-10 flex-center-between px-6 w-full lg:hidden">
                <a
                    href="/"
                >
                    <img
                        src="/assets/xora.svg"
                        alt="Logo"
                        width={100}
                        height={30}
                    />
                </a>

                <button
                    className="size-10 p-2 border-2 border-p1/25 rounded-circle duration-200 flex-center-all active:scale-[0.95]"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <img
                        src={`/assets/${isOpen ? "close" : "magic"}.svg`}
                        alt={isOpen ? "close icon" : "magic icon" }
                    />
                </button>
            </div>

            <div className={clsx("w-full max-container max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:min-h-screen max-lg:bg-s2 max-lg:z-0 max-lg:flex max-lg:items-center duration-700 sidebar-before", isOpen ? "max-lg:opacity-100 max-lg:visible" : "max-lg:opacity-0 max-lg:invisible")}>
                <nav className="relative z-10 flex-center-between max-lg:flex-col max-lg:items-start max-lg:gap-4">
                    <div className="nav-li">
                        <NavLink title={"features"} />
                        <div className="dot" />
                        <NavLink title={"pricing"} />
                    </div>

                    <a 
                        href="/"
                        className="nav-logo"
                    >
                        <img
                            src="/assets/xora.svg"
                            alt="Logo"
                            width={130}
                            height={30}
                        />
                    </a>

                    <div className="nav-li">
                        <NavLink title={"faq"} />
                        <div className="dot" />
                        <NavLink title={"download"} />
                    </div>
                </nav>

                {/* Overlay */}
                <div className="max-lg:block hidden absolute z-2 w-[950px] h-[350px] top-[50%] left-[-300px] -translate-y-[50%] rotate-90">
                    <img 
                        src="/assets/bg-outlines.svg"
                        alt="outlines"
                        width={950}
                        height={350} 
                        className="relative z-2"
                    />
                    <img 
                        src="/assets/bg-outlines-fill.png"
                        alt="outlines"
                        width={950}
                        height={350} 
                        className="absolute inset-0 mix-blend-soft-light opacity-5 z-2"
                    />
                </div>

                <div className="absolute bottom-5 left-6 z-3 md:hidden">
                    <SocialsPanel />
                </div>
            </div>

        </header>
    );
};

export default Header;