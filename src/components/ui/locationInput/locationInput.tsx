import { useState, useRef } from "react";
import CitiesDropdown from "./citiesDropdown";
import Input from "../input";
import clsx from "clsx";
import { FaLocationDot } from "react-icons/fa6";

type LocationInputClassName = {
  label?: string;
  input?: string;
};

interface LocationInputProps {
  className?: LocationInputClassName;
  value: string;
  setValue: (value: string) => void;
  onSelectCity: (city: string) => void;
  cities: string[];
  debouncedCitiesRequest: (query: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({
  className,
  value,
  setValue,
  onSelectCity,
  cities,
  debouncedCitiesRequest,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setValue(text);
    debouncedCitiesRequest(text);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (!dropdownRef.current?.contains(document.activeElement)) {
        setIsFocused(false);
      }
    }, 100);
  };

  const handleSelectCity = (city: string) => {
    onSelectCity(city);
    setIsFocused(false);
  };

  return (
    <div className="relative w-full">
      <Input
        icon={<FaLocationDot size={24} color="#0A65CC"/>}
        className={clsx(
          `mt-2 border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`,
          className && className.input
        )}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="City, state, country name"
      />
      {isFocused && cities.length > 0 && (
        <CitiesDropdown
          cities={cities}
          handleSelectCity={handleSelectCity}
          dropdownRef={dropdownRef}
        />
      )}
    </div>
  );
};

export default LocationInput;
