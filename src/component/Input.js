import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";

const Input = ({
  icon: Icon,
  placeholder,
  type,
  value,
  onChange,
  children,
}) => {
  const iconValue = useMemo(() => ({ className: "icon" }), []);

  return (
    <div className="input-field-wrapper">
      {Icon && (
        <div className="input-icon">
          <IconContext.Provider value={iconValue}>
            <Icon />
          </IconContext.Provider>
        </div>
      )}
      <div className="input-field-div">
        <input
          className="input-field"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {children}
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.elementType,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Input;
