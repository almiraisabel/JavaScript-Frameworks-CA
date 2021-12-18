import PropTypes from "prop-types";

function WithTax({ amount, taxRate }) {
    const total = amount + amount / taxRate;
    return <div>{total}</div>;
}

WithTax.propTypes = {
    amount: PropTypes.number,
    taxRate: PropTypes.number,
};

WithTax.defaultProps = {
    amount: 0,
    taxRate: 10,
};

export default WithTax;