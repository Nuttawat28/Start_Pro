import PropTypes from "prop-types";

export default function ShowName({ name, show}) {
    console.log("name:", name);
    console.log("show:", name);

    return <div>{show && <h2>Your Name is: {name}</h2>}</div>;
}

ShowName.PropTypes = {
    name: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
};