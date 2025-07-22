import * as React from "react";

const CircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        {...props}
    >
        <circle cx="16" cy="16" r="16" fill="#C1FD35" />
    </svg>
);

export default CircleIcon;