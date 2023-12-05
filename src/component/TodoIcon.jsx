import { ReactComponent as CheckSVG} from "../styles/icons/check.svg";
import { ReactComponent as DeleteSVG} from "../styles/icons/delete.svg";
import "../styles/TodoIcon.css";

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
};

function TodoIcon({type, color, onClick}) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};