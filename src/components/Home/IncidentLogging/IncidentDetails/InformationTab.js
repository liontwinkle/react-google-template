import React from 'react';
import './style.scss';

const InformationTab = () => {
    return (
        <>
            <div class="row bd bg-gray-50 pd-y-10">
                <div class="col">
                    <div className="action-card-title d-flex justify-content-between align-items-center">
                        <p>#210 Signage Hazard - Millstons Point</p>
                        <span className="pt-0 pb-0 pl-2 pr-2 rounded d-flex align-items-center m-0">3m</span>
                    </div>
                    <span className="action-card-subheader pt-0 pb-0 pl-2 pr-2 rounded d-flex align-items-center bg-dark">
                        Event Control Centre(ECC)
                    </span>
                </div>
                <div class="col-3 no-wrap">
                    START TIME<br />
                    2:05:44 PM
                </div>
                <div class="col-2 no-wrap">
                    DURATION<br />
                    5:44 min
                </div>
            </div>
            <div class="row">
                <div class="col">Map</div>
            </div>
            <div class="row">
                <div class="col">One of three columns</div>
                <div class="col">One of three columns</div>
            </div>
        </>
    );
};

export default InformationTab;
