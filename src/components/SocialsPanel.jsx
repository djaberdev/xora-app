import { socials } from "../constants";

const SocialsPanel = () => {
    return (
        <div className="flex items-center gap-5">
            {socials.map(({ id, title, icon, url }) => (
                <a 
                    key={id}
                    href={url}
                    className="w-[55px] h-[55px] max-sm:w-[48px] max-sm:h-[48px] bg-s1 ring-1 ring-s4/20 rounded-circle flex-center-all transition-all duration-400 hover:ring-s4 group"
                    title={title}
                >
                    <img 
                        src={icon} 
                        alt={title} 
                        className="w-[22px] max-sm:w-[19px]"
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialsPanel;