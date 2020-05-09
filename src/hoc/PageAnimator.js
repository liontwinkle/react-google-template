import React from 'react';

const PageAnimator = (props) => (
    <div className={props.animateClass}>
            {props.children}
    </div>
);

export default PageAnimator;