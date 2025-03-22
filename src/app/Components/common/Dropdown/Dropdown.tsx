import React, { useEffect, useState } from "react";
import styles from "./Dropdown.module.css";
import { DropdownOption } from "@/app/Constants/interfaces";

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (selectedOption: DropdownOption) => void;
  selectedOption: DropdownOption;
  isSearch?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  onSelect = () => {},
  selectedOption,
  isSearch = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | DropdownOption>(null);

  useEffect(() => {
    setSelectedItem(selectedOption);
  }, [selectedOption]);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedItem(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsOpen(!isOpen)}>{selectedItem?.label}</button>
      {isSearch && <div>Search</div>}
      {isOpen && (
        <div className={styles.dropdownContent}>
          {options.map((option) => (
            <div key={option?.id} className={styles.optionWrapper}>
              {option?.icon && <div>{option?.icon}</div>}
              <div onClick={() => handleOptionClick(option)}>
                {option?.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
