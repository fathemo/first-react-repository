import { href } from "react-router-dom";

export default function Sidebar_stoke_item({info}) {
    return info&& <>
        <a
            className="nav-link"
            data-toggle="collapse"
            href={`${info.Href}`}
            aria-expanded="false"
            aria-controls={`${info.aria_controls}`}
        >
            <i className={`${info.Class} menu-icon`} />
            <span className="menu-title">{info.Name}</span>
            <i className="menu-arrow" />
        </a>
    </>
}