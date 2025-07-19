import Button from "../components/Button";
import { Element } from "react-scroll";

const Hero = () => {
    return (
        <section className="pt-45 max-lg:pt-40 max-md:pt-30 pb-30">
            <Element name="hero">
                <div className="max-container relative">
                    <div className="relative z-2 max-w-[400px]">
                        <span className="small-2 caption">Video Editing</span>

                        <h1 className="text-[80px] leading-[80px] tracking-[-1px] text-p4 font-extrabold uppercase mt-5 mb-7 max-md:mb-3 max-md:max-w-[150px] max-md:text-6xl! max-md:leading-16! max-sm:text-5xl! max-sm:leading-12!">Amazingly Simple</h1>

                        <p className="body-1 max-md:max-w-[450px] mb-8">We designed XORA AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful.</p>

                        <Button icon={"/assets/zap.svg"}>Try it now</Button>
                    </div>

                    <div className="absolute z-0 size-[1100px] top-1/2 -translate-y-1/2 left-[calc(-50%+320px)] md:left-[calc(10%+200px)] max-md:top-16/12 max-md:hidden">
                        <img
                            src="/assets/hero.png" 
                            alt="Hero"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Element>
        </section>
    )
};

export default Hero;