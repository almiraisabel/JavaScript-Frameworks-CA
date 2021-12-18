import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SpacecraftItem({ id, name }) {
    return (
        <Link to={`detail/${name}`}>
            <h2>Spacecraft {name}</h2>
            <p>SpaceID {id}</p>
        </Link>
    );
}

SpacecraftItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default SpacecraftItem;