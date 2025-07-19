import { useState } from "react";
import clsx from "clsx";

const FaqItem = ({ faq }) => {

    let { id, question, answer } = faq;

    const [activeId, setActiveId] = useState(null);
    const activeEL = activeId === id;

    return (
        <div className={clsx("relative z-2 pt-6 pb-4 rounded-2xl bg-transparent border-2 border-transparent transition-all duration-500 before:content-[''] before:absolute before:-top-[3.5px] before:left-[30px] before:w-[0px] before:h-1 before:z-1 before:rounded-full before:bg-p1/80 before:transition-all before:duration-500 before:opacity-0", activeId === id && "lg:bg-s4/40! lg:before:opacity-100 lg:before:w-[100px] lg:border-s3/30")}>
            <div 
                className="relative z-2 group flex-center-between max-lg:items-start cursor-pointer gap-10 px-7"
                onClick={() => setActiveId(activeId === id ? null : id)}
            >
                <div>
                    <span className="text-sm text-p3 max-lg:hidden">{id < 10 ? `0${id}.` : `${id}` }</span>
                    <h2 className={clsx("text-2xl font-semibold max-sm:text-xl transition-colors duration-400", activeEL && "max-lg:text-p1")}>{question}</h2>
                </div>

                <div className={clsx("relative p-0.5 ring-2 ring-s4/15 transition-all duration-400 group-hover:ring-s4/80 rounded-circle", activeEL && "ring-s4/80!")}>
                    <button className={clsx("relative size-[45px] max-md:size-[40px] g5 flex-center-all faq-icon rounded-circle", activeEL && "after:opacity-0! after:rotate-0! before:bg-p1!")}>
                    </button>
                </div>
            </div>

            <SlideDown>
                {activeId === id && (
                    <div className="realtive z-2 body-3 px-7 py-3.5">{answer}</div>
                )}
            </SlideDown>
        </div>
    );
};

export default FaqItem;