import clsx from "clsx";

const TestimonialItem = ({ testimonial, index, isFirstDiv }) => {

    let { id, comment, role, name, avatarUrl } = testimonial;

    return (
        <div className={clsx("relative px-10 py-8 border-b-2 border-s3/20 lg:last:border-b-0 lg:last:pb-30 ", isFirstDiv && index === 0 || !isFirstDiv && index === 0 ? "lg:pt-0 lg:-top-3" : "")}>
            <div className="flex flex-col gap-8">
                {/* For the comment */}
                <p className="body-1 text-p4 font-semibold">{comment}</p>

                {/* For the profile */}
                <div className="flex items-center gap-4">
                    <div className="p-1.5 ring-1 ring-s3/50 size-[70px] rounded-circle">
                        <img 
                            src={avatarUrl} 
                            alt={name}
                            className="object-contain"
                        />
                    </div>

                    <div>
                        <h2 className="text-md text-p1 font-semibold">{name}</h2>
                        <span className="text-xs font-semibold text-s3 uppercase">{role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;