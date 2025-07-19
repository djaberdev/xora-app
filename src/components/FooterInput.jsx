import { useState } from "react";
import clsx from "clsx";
import Marker from "./Marker.jsx";
import ArrowRight from "./ArrowRight.jsx";

const FooterInput = () => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={clsx("relative p-1.5 rounded-2xl bg-s2 ring-1 ring-s4/20 transition-all duration-500 group hover:ring-s4/60 max-w-[400px]", isFocused && "ring-s4/60")}>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 rotate-180"><Marker /></div>
            <form action="#" className="flex-center-between py-2 pl-5 pr-3 bg-s2 ring-1 ring-s1 rounded-xl">
                <input 
                    type="email" 
                    placeholder="youremail@demain.com"
                    className="text-p4 text-base placeholder:text-[15px] placeholder:text-p5/15 placeholder:font-medium py-3 pl-2"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <button 
                    type="submit"
                    className="relative w-[50px] h-[50px] flex-center-all"
                    onClick={(e) => e.preventDefault()} 
                >
                    <img 
                        src="/assets/lines.svg"
                        alt="lines"
                        className="absolute w-[80px] h-[80px] rotate-45"
                    />
                    <ArrowRight />
                </button>
            </form>
        </div>
    );
};

export default FooterInput;