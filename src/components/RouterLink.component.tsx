import { Link } from "react-router-dom";
import { primaryColor } from "../constants";

type RouterLinkProps = {
    children: string,
    href: string
}

function RouterLink(props: RouterLinkProps) {
    return ( 
        <Link to={props.href} style={{ textDecoration: "none", color: primaryColor }}>
            {props.children}
        </Link>
     );
}

export default RouterLink;