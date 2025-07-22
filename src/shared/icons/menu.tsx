import * as React from "react";

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="33"
        height="26"
        viewBox="0 0 33 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 2h33M0 13h33M0 24h33"
            stroke="#C1FD35"
            strokeWidth="4"
            strokeLinecap="round"
        />
    </svg>
);

export default MenuIcon;
