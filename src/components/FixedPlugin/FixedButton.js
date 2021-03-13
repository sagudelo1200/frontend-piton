import React from "react";

// reactstrap components
import { Dropdown, DropdownToggle } from "reactstrap";
import ModalExample from './../Modals/Modal'

function FixedButton(props) {
  const [dropDownIsOpen, setdropDownIsOpen] = React.useState(false);
  const handleClick = () => {
    setdropDownIsOpen(!dropDownIsOpen);
  };

  return (
    <div className="fixed-button">
      <Dropdown direction="up" isOpen={dropDownIsOpen} toggle={handleClick}>
        <DropdownToggle tag="div">
          <i className={props.icon + " fa-3x pt-2"} />
        </DropdownToggle>
        <ul className="dropdown-menu show">
          <li><i className="fa fa-box-open fa-2x" /></li>
          <li><i className="fa fa-print fa-2x" /></li>
        </ul>
      </Dropdown>
    </div>
  );
}

export default FixedButton;
