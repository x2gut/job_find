interface CitiesDropdownProps {
  cities: any[];
  handleSelectCity: (city: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

const CitiesDropdown: React.FC<CitiesDropdownProps> = ({
  cities,
  handleSelectCity,
  dropdownRef,
}) => {
  return (
    <div
      ref={dropdownRef}
      className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10"
    >
      <ul className="py-2 max-h-60 overflow-y-auto flex flex-col items-start">
        {cities.map((city, index) => (
          <li
            onClick={() => {
              handleSelectCity(city.properties.formatted);
            }}
            key={index}
            className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer w-full"
          >
            {city.properties.formatted}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesDropdown;
