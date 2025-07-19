import clsx from "clsx";
import Marker from "./Marker.jsx";

const Button = ({ icon, children, href, onClick, markerFill }) => {
    const Inner = () => (
        <>
            <span className="relative flex items-center min-h-[60px] px-5 g4 rounded-2xl overflow-hidden inner-before group-hover:before:opacity-100">
                <span className="absolute -left-[1px] z-3">
                    <Marker fill={markerFill} />
                </span>
                { icon && (
                    <img src={icon} alt="icon" className="size-10 object-contain mr-5 z-3" />
                )}

                <span
                    style={markerFill ? { color: markerFill } : { color: "#2EF2FF" }}
                    className={clsx(`base-bold uppercase z-3`)}>{children}</span>
            </span>
        </>
    );

    return href ? (
        <a 
            className={clsx("special-btn relative p-0.5 rounded-2xl shadow-500 g5 group")}
            href={href}
        >
            <Inner />
        </a>
    ) : (
        <button
            className={clsx("special-btn relative p-0.5 rounded-2xl shadow-500 g5 group")}
            onClick={onClick}
        >
            <Inner />
        </button>
    )
}

export default Button;