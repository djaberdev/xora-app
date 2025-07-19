import { Element } from "react-scroll";
import { faq } from "../constants";
import FaqItem from "../components/FaqItem.jsx";

const FAQ = () => {

    let halfLength = Math.floor(faq.length / 2);

    return (
        <section>
            <Element name="faq">
                <div className="relative max-container min-h-[300px] flex-center-all faq-head_line faq-head_dot mb-10 max-lg:mb-6">
                    <div className="absolute -bottom-[100%] left-1/2 -translate-1/2 w-2/4 h-full bg-[linear-gradient(#3062a3,_#19549f)] blur-[200px] max-md:blur-[130px] opacity-50 rounded-full" />
                    <div className="relative z-3 w-full">
                        <h1 className="font-semibold text-p4 lg:max-w-3/4 text-5xl leading-[52px] max-lg:text-4xl max-lg:leading-[40px] max-md:text-3xl max-md:leading-[34px]">Curiosity didn’t kill the cat, it got answers.</h1>
                        <p className="text-2xl max-md:text-xl mt-5">You’ve got questions, we’ve got answers.</p>
                    </div>
                </div>

                {/* Remove The Padding Later */}
                <div className="relative bg-dark-s1 border-t-2 border-b-2 border-s3/20 faq-grid_line faq-grid_dot">
                    <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 size-[80px] bg-dark-s1 flex-center-all rounded-circle border-2 border-s3/20 z-2">
                        <img 
                            src="/assets/faq-logo.svg" 
                            alt="faq logo" 
                            className="object-contain"
                        />
                    </div>
                    <div className="max-container-2 lg:px-4 flex items-start gap-10 max-lg:gap-5 flex-wrap mt-20 mb-20">
                        <div className="lg:flex-1 w-full flex flex-col gap-5">
                            {faq.slice(0, halfLength).map((item) => (
                                <FaqItem key={item.id} faq={item} />
                            ))}
                        </div>
                        <div className="lg:flex-1 w-full flex flex-col gap-5">
                            {faq.slice(halfLength).map((item) => (
                                <FaqItem key={item.id} faq={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default FAQ;