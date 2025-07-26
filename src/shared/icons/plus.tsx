import * as React from "react";

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        {...props}
    >
        <circle cx="17" cy="17" r="16.35" stroke="#C1FD35" strokeWidth="1.3" />
        <path d="M16.75 10V24.5" stroke="#C1FD35" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M24 17L9.5 17" stroke="#C1FD35" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
);

export default PlusIcon;