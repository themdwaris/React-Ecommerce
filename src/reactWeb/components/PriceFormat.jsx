
const PriceFormat = ({price}) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(price * 82);
};

export default PriceFormat;
