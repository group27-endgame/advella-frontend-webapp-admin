import { Link, NavLinkProps } from "react-router-dom";
import { fontColor } from "../constants";

interface RouterLinkProps extends NavLinkProps {
    children: string,
    color?: string,
}

function RouterLink(props: RouterLinkProps) {
    const { children, style, className, color = fontColor, ...rest } = props;
    return ( 
        <Link style={{ textDecoration: "none", color: color }} {...rest}>
            {props.children}
        </Link>
     );
}

export default RouterLink;