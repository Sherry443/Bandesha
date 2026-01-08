import Link from "next/link";
import { ServiceDataType } from "@/types/service";
import Icons from "./Icons";
import parser from "html-react-parser";

const CardService = ({ data }: ServiceDataType) => {
    const { 
        title,
        description,
        slug,
        icon,
    } = data || {};

    return (        
        <Link
            className="multicolumn-card"
            href={`${slug}`}
            aria-label="View Service Details"
        >
            {icon && <div className="card-icon icon-40">{parser(icon)}</div>}

            {title && <h2 className="heading text-28">{title}</h2>}

            {description && <div className="text text-16">{description}</div>}
        </Link>
    )
}

export default CardService;