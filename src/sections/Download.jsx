import { Element } from "react-scroll";
import { links, logos } from "../constants";
import MarkerLink from "../components/MarkerLink.jsx";
import clsx from "clsx";

const Download = () => {
    return (
        <section className="relative g7 py-26 max-lg:py-20 max-md:py-14 lg:px-26 z-2">
            <Element name="download">
                <div className="flex items-center gap-8 pl-16 max-xl:pl-0 max-lg:pl-6 max-lg:pr-6">
                    {/* For the info part */}
                    <div className="flex flex-col items-start max-w-[400px] max-md:max-w-full">
                        <img 
                            src="/assets/xora.svg" 
                            alt="Logo"
                            width={150}
                            height={30}
                        />

                        <p className="body-1 my-8 max-md:max-w-[400px]">Try it now for free on iOS, Android, PC, Web - whatever your flavor, we’ve got you covered.</p>

                        <div className="flex items-center gap-5">
                            {links.map(({ id, title, icon, url }, index) => (
                                <a 
                                    key={id}
                                    href={url}
                                    className={clsx("relative w-20 h-20 rounded-circle flex-center-all p-[5px] border-1 border-p5/40 transition-all duration-500 bg-s1 group hover:border-s4", index === links.length - 1 && "download-links-screen_connector")}
                                    title={title}
                                >
                                    <div className="absolute -top-[1px]"><MarkerLink /></div>

                                    <div className="w-full h-full bg-s2 rounded-circle flex-center-all">
                                        <div className="w-full h-full relative">
                                            <img 
                                                src="/assets/lines.svg" 
                                                alt="lines"
                                                className="absolute top-1/2 left-1/2 -translate-1/2 w-[55px] z-1" 
                                            />
                                            <div className="absolute top-1/2 left-1/2 -translate-1/2 z-2 transition-all duration-500  group-hover:scale-[1.05]">{icon}</div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* For the screen photo */}
                    <div className="relative z-2 -right-[10%] rounded-4xl p-6 border-2 border-s3/50 max-md:hidden download-screen_dot">
                        <div className="relative p-6 bg-s1 rounded-3xl pt-7 flex flex-col gap-5">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-circle bg-s4"></span>
                                <span className="w-2.5 h-2.5 rounded-circle bg-s3"></span>
                                <span className="w-2.5 h-2.5 rounded-circle bg-s2"></span>
                            </div>
                            <img 
                                src="/assets/screen.jpg"
                                alt="Xora screen"
                                className="rounded-2xl max-w-[unset]! w-[800px] max-lg:w-[600px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Logos Section */}
                <div className="max-w-[1000px] mx-auto max-lg:hidden">
                    <div className="flex-center-between mt-20">
                        {logos.map((logo) => (
                            <div>
                                <img 
                                    src={logo.url} 
                                    alt={logo.title}
                                    className={`w-[${logo.width}px] h-[${logo.height}px] scale-[0.9]`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Download;