import React from "react";

interface WrapperProps {
	children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	return <div className="wrapper px-6">{children}</div>;
};

export default Wrapper;
