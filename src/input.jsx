/* eslint-disable react/prop-types */

const currencyMask = (value, locale = "pt-BR") => {
  const onlyDigitsValue = value
    .replace(".", "")
    .replace(",", "")
    .replace(/\D/g, "");
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
  }).format(parseFloat(onlyDigitsValue) / 100);
};

/**
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>} props
 */
export default function CurrencyInput(props) {
  function handleInput(event) {
    let {
      currentTarget: { value },
    } = event;
    console.log("handleInput", value, currencyMask(value));
    event.currentTarget.value = currencyMask(value);

    props.onChange(event);
  }

  return (
    <input
      {...props}
      onChange={handleInput}
      inputMode="decimal"
      type="text"
    />
  );
}
