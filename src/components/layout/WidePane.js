import React from 'react';
import PageAnimator from './PageAnimator';

const WidePane = (props) => (
    <PageAnimator animateClass={props.animateClass}>
        <div className="main-group wide-group">
            {props.children}
        </div>
    </PageAnimator>
);

export default WidePane;