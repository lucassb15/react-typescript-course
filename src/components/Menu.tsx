import React, { Children } from "react";

interface IProps{
    children: React.ReactNode;
}

const Menu: React.FC<IProps> = (props) => {
    return (
        <div>
            { props.children }
        </div>
    );
}

export default Menu;