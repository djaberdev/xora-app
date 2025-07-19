import { Element } from "react-scroll";
import { features, details } from "../constants";
import Button from "../components/Button.jsx";

const Features = () => {
    return (
        <section className="relative">
            <Element name="features">
                <div className="max-container">
                    <div className="relative flex flex-col border-2 border-s3 rounded-4xl feature-after md:bg-[linear-gradient(#1b275a,_#0e1434)] md:overflow-hidden max-md:border-none max-md:rounded-none">
                        {/* This is the container of the 2 inner divs */}
                        <div className="w-full flex md:flex-nowrap flex-wrap  max-md:gap-4">
                            {features.map(({ id, icon, caption, title, text, button }) => 
                                <div 
                                    key={id}
                                    className="flex flex-col items-start flex-1 py-12 px-10 max-md:pb-8 
                                    max-md:pt-10 max-md:px-6 max-md:bg-s3/30 max-md:border-2 max-md:border-s3 max-md:rounded-2xl max-md:flex-[320px]"
                                >
                                    <div className="relative w-fit mb-16 max-md:hidden">
                                        <span className="absolute z-1 -top-5/12 left-1/2 -translate-x-1/2 h-30 w-0.5 bg-s3"></span>
                                        <img src={icon} alt={`icon 0${id}`} width={140} className="relative z-2" />
                                    </div>
                                    <div className="mb-8 flex-1">
                                        <span className="small-2 caption">{caption}</span>
                                        <h1 className="text-p4 text-[40px] md:leading-[52px] font-bold max-md:text-3xl max-sm:text-3xl mt-2 mb-6 max-md:mb-3">{title}</h1>
                                        <p className="body-1 max-md:text-[18px]! max-md:leading-[32px]!">{text}</p>
                                    </div>
                                    <Button icon={button.icon}>{button.title}</Button>
                                </div>
                            )}
                        </div>
                        {/* This is the down div that get hide in the mobile devices */}
                        <div className="relative w-full flex items-center gap-5 justify-around py-12 px-10 border-2 border-s3 rounded-4xl g9 overflow-hidden max-md:hidden details-after">
                            {details.map(({ id, icon, title }) => (
                                <div
                                    key={id}
                                    className="relative z-2 flex flex-col items-center gap-3 detail-before"
                                >
                                    <div className="w-[80px] rounded-full border-1 border-transparent transition-all duration-300 hover:border-p5/50">
                                        <img src={icon} alt={`icon 0${id}`} className="object-contain" />
                                    </div>
                                    <p className="base max-w-[180px] text-center">{title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Features;