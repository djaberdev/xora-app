import { testimonials } from "../constants";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {

    let halfLength = Math.floor(testimonials.length / 2);

    return (
        <section className="mt-30 max-lg:mt-20">
            <div className="max-container-2 px-12 max-lg:px-6 max-md:px-0 flex items-start max-lg:flex-col max-lg:gap-10">
                <div className="flex flex-col items-start gap-4 w-fit max-w-[300px] lg:mr-12 max-lg:items-center max-lg:text-center max-lg:mx-auto">
                    <span className="small-2 uppercase text-p3">Wall Of Love</span>
                    <h2 className="text-4xl text-p4 font-semibold max-lg:text-3xl">Words from our fans</h2>
                </div>

                <div className="relative flex-1 grid grid-cols-2 max-lg:grid-cols-1 testimonials-line">
                    <div className="flex flex-col">
                        {testimonials.slice(0, halfLength).map((item, i) => (
                            <TestimonialItem key={item.id} testimonial={item} index={i} isFirstDiv={true} />
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {testimonials.slice(halfLength).map((item, i) => (
                            <TestimonialItem key={item.id} testimonial={item} index={i} />
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Testimonials;