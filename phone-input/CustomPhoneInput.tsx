/* eslint-disable @next/next/no-img-element */
import countriesData from "./countriesData.json";
import "./styles.css";
type Country = {
  country?: string;
  capital?: string[];
  dial_code?: string;
  region?: string;
  flag?: string;
  phoneLength?: string;
};
type Props = {
  label?: string;
  defaultCountryCode?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: ({
    value,
    formattedValue,
    countryCode,
  }: {
    value?: string;
    formattedValue?: string;
    countryCode?: string;
  }) => void;
};

export default function CustomPhoneInput({
  defaultCountryCode = "+91",
  defaultValue,
  placeholder,
  label = "Phone",
  onChange = () => {},
}: Props) {
  const [show, setShow] = useState(false);

  const [value, setValue] = useState(defaultValue || "");

  const defaultCountryData = countriesData.find(
    (country) => country.dial_code === defaultCountryCode
  );

  const [selectedValues, setSelectedValues] = useState<Country>({
    dial_code: defaultCountryData?.dial_code!,
    flag: defaultCountryData?.flag!,
    phoneLength: defaultCountryData?.phoneLength!,
  });

  const selectCountry = (country: Country) => {
    setShow((prev) => !prev);
    setSelectedValues({
      dial_code: country?.dial_code,
      flag: country.flag,
      phoneLength: country.phoneLength,
    });
  };

  return (
    <label className="phone_library">
      <span>{label}</span>
      <div className="phone_input-container">
        {show && (
          <div className="input_dropDown">
            {countriesData.map((country, index) => (
              <div onClick={() => selectCountry(country)} key={index}>
                <img
                  src={country.flag}
                  alt="country_flag"
                  width={"28"}
                  height={"25"}
                />
                <span>{country.country}</span>
              </div>
            ))}
          </div>
        )}
        <div
          className="flag_container"
          onClick={() => setShow((prev) => !prev)}
        >
          <div>
            <img
              src={selectedValues.flag as string}
              alt="selected_flag"
              width={"32"}
              height={"30"}
            />
          </div>
          <span>{selectedValues.dial_code}</span>
        </div>
        <input
          onChange={(e) => {
            setValue((v) => (e.target.validity.valid ? e.target.value : v));
            onChange({
              value: e.target.value,
              countryCode: selectedValues.dial_code,
              formattedValue: `${selectedValues?.dial_code}${" "}${
                e.target.value
              }`,
            });
          }}
          value={value}
          className="input"
          type="text"
          placeholder={placeholder}
          maxLength={Number(selectedValues?.phoneLength)}
          pattern="[0-9]*"
        />
      </div>
    </label>
  );
}
