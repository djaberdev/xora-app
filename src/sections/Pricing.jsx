import { useState } from "react";
import { Element } from "react-scroll";
import clsx from "clsx";
import { plans } from "../constants";
import CountUp from "react-countup";
import Button from "../components/Button.jsx"; 

const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(false);

    return (
        <section className="relative z-1">
            <Element name="pricing">
                <div className="rlelative max-container">
                    <div className="relative max-w-[90%] max-md:max-w-[100%] mx-auto pt-20 max-md:pt-16 pb-36 max-lg:pb-22 border-x-2 border-s3/50 max-lg:border-none">
                        <div className="relative w-full flex-center-all flex-col gap-10 px-4 pricing-head_before">
                            <h2 className="relative z-4 text-p4 font-bold text-center text-5xl leading-[60px] max-xl:text-4xl max-md:leading-[48px] max-sm:text-3xl max-sm:leading-[42px] max-w-[60%] max-md:max-w-[80%]">Flexible pricing for teams of all sizes</h2>

                            <div className="relative z-4 p-1.5 ring-2 ring-s4/50 w-[320px] rounded-2xl bg-s1/50">
                                <div className="relative w-full flex bg-s2 rounded-xl">
                                    <button 
                                        className="pricing-head_btn"
                                        onClick={() => setIsMonthly(true)}
                                    >Monthly</button>
                                    <button 
                                        className="pricing-head_btn"
                                        onClick={() => setIsMonthly(false)}
                                    >Annual</button>
                                    <div className={clsx("absolute z-1 pricing-head_btn_before w-1/2 h-full g2 rounded-xl transition-transform duration-500", isMonthly ? "translate-x-0" : "translate-x-full")} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-lg:w-[960px] h-[350px] absolute bottom-[-100px] left-1/2 -translate-x-1/2 z-1">
                            <img 
                                src="/assets/bg-outlines.svg"
                                alt="outlines"
                                width={960}
                                height={350} 
                                className="relative z-2"
                            />
                            <img 
                                src="/assets/bg-outlines-fill.png"
                                alt="outlines"
                                width={960}
                                height={350} 
                                className="absolute inset-0 mix-blend-soft-light opacity-[5%] z-2"
                            />
                        </div>
                    </div>

                    {/* Pricing Plans */}
                    <div className="relative z-4 flex items-start max-lg:gap-4 max-lg:pt-15 max-lg:overflow-auto scroll-hide -top-[50px]">
                        {plans.map((plan, index) => (
                            <div
                                key={plan.title}
                                className={clsx("relative pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even border-2 flex-1 pb-8 flex flex-col max-lg:min-w-[300px] max-lg:rounded-3xl", index === 1)}
                            >
                                <div className={clsx("max-w-[80%] mx-auto relative z-2 w-full flex flex-col items-center pb-8.5", index === 1 ? "" : "border-b-2 border-s3/30")}>
                                    <div className={clsx("relative flex-center-all size-[88px] -top-[44px]", index === 1 && "lg:size-[108px]")}>
                                        <img 
                                            src={plan.logo} 
                                            alt="plan logo" 
                                            className="object-contain"
                                        />
                                    </div>

                                    <span className={clsx("small-2 ring-2 rounded-full py-1.5 px-3 uppercase mb-8", index === 1 ? "text-p3 ring-p3" : "text-p1 ring-p1 lg:-mt-2")}>{plan.title}</span>

                                    <div>
                                        <div className="w-full flex items-start justify-center">
                                            <h1 className={clsx("text-7xl font-bold", index === 1 ? "text-p3" : "text-p4")}>
                                                $<CountUp 
                                                    start={plan.priceYearly}
                                                    end={isMonthly ? plan.priceMonthly : plan.priceYearly}
                                                    duration={0.45}
                                                    preserveValue={true}
                                                    useEasing={false}
                                                />
                                            </h1>
                                            <span className="text-sm text-p5 font-medium uppercase translate-y-2 ml-2">/ mo</span>
                                        </div>

                                        <p className="mt-2 text-xl text-p4 text-center">{plan.caption}</p>
                                    </div>
                                </div>

                                {index === 1 && (
                                    <div className="before:content-[''] before:absolute before:inset-0 before:z-1 before:w-full before:h-[330px] before:bg-s4/30 before:rounded-tr-3xl before:rounded-tl-3xl max-lg:before:h-[292px]"/>
                                )}

                                <ul className={clsx("flex flex-col items-start gap-4 pt-8 px-14 max-lg:px-6", index === 1 && "lg:pt-14")}>
                                    {plan.features.map((feature, i) => (
                                        <li 
                                            key={i}
                                            className="flex items-center gap-3"
                                        >
                                            <img 
                                                src="/assets/check.png" 
                                                alt="check"
                                                className="size-[40px]" 
                                            />
                                            <p className="flex-1 text-p5">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mx-auto w-fit mt-10">
                                    <Button icon={plan.icon} markerFill={index === 1 && "#C8EA80"}>
                                        Get Started
                                    </Button>
                                </div>

                                {index === 1 && (
                                    <p className="relative w-fit mt-10 mx-auto before:content-['-'] before:mr-2 after:content-['-'] after:ml-2 text-xs text-p3 max-lg:hidden">Limited time offer</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Pricing;