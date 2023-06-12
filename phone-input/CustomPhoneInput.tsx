import countriesData from "./countriesData.json";
import "./styles.css";
import { useState } from "react";
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
    (country) => country.dial_code.toString() === defaultCountryCode
  );
  const [selectedValues, setSelectedValues] = useState({
    code: defaultCountryData?.dial_code.toString(),
    flag: defaultCountryData?.flag,
  });
  console.log(show);
  // const num = phoneUtil.;
  const selectCountry = ({ code, flag }: any) => {
    setShow((prev) => !prev);
    setSelectedValues({ code: code.toString(), flag: flag });
  };
  console.log(value);
  return (
    <label className="phone_library">
      <span>{label}</span>
      <div className="phone_input-container">
        {show && (
          <div className="input_dropDown">
            {countriesData.map((country, index) => (
              <div
                onClick={() =>
                  selectCountry({ code: country.dial_code, flag: country.flag })
                }
                key={index}
              >
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
          <span>{selectedValues.code}</span>
        </div>
        <input
          onChange={(e) => {
            setValue((v) => (e.target.validity.valid ? e.target.value : v));
            onChange({
              value: e.target.value,
              countryCode: selectedValues.code?.toString(),
              formattedValue: `${selectedValues?.code?.toString()}${" "}${
                e.target.value
              }`,
            });
          }}
          value={value}
          className="input"
          type="text"
          placeholder={placeholder}
          maxLength={defaultCountryData?.phoneLength[0] as number}
          pattern="[0-9]*"
        />
      </div>
    </label>
  );
}
