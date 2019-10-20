
import React from 'react';

import './Tabs.scss';

function Tabs(props) {

    return (
        <div className="Tabs">
            {React.Children.map(props.children, (child, idx) => {
                let className = 'Tabs__tab';
                if (child.key === props.active) {
                    className = `${className} active`
                }

                return (
                    <div
                        onClick={() => props.onChange(child.key)}
                        className={className}
                    >
                        {child}
                    </div>
                )
            })}
        </div>
    );
}

export default Tabs;
