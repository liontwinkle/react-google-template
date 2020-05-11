import React from 'react';
import PageAnimator from '../../hoc/PageAnimator';

const WidePane = (props) => {

    let layoutClass = "main-group wide-group";
    if (props.layoutClass) {
        layoutClass = props.layoutClass;
    }

    return (
        <PageAnimator animateClass={props.animateClass}>
            <div className={layoutClass}>
                {props.children}
            </div>
        </PageAnimator>
    );
}

export default WidePane;