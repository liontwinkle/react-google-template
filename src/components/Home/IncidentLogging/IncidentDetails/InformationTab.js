import React from 'react';
import './style.scss';
import { Table } from 'antd';
import GoogleMapComponent from '../../../common/GoogleMap';
import CustomTab from '../../../common/CustomTab';

const currentPos = {
    name: 'Current position',
    address: '',
    position: {
        lat: -33.86566064617498,
        lng: 151.20870681376962,
    },
};

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
    },
];

const data = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        description: 'This not expandable',
    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
];

const tabList = [
    {
        key: 'details',
        value: 'Details',
        children: <Table
            columns={columns}
            expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                rowExpandable: record => record.name !== 'Not Expandable',
            }}
            dataSource={data}
        />,
    },
    {
        key: 'checklist',
        value: 'Checklist',
        children: <div>Checklist</div>,
    },
    {
        key: 'calls',
        value: 'Active Calls (2)',
        children: <div>Active Calls (2)</div>,
    },
];

const InformationTab = () => {
    return (
        <>
            <div className="row bd bg-gray-50 pd-y-10">
                <div className="col">
                    <div className="action-card-title d-flex justify-content-between align-items-center">
                        <p>#210 Signage Hazard - Millstons Point</p>
                        <span className="pt-0 pb-0 pl-2 pr-2 rounded d-flex align-items-center m-0">3m</span>
                    </div>
                    <span className="action-card-subheader pt-0 pb-0 pl-2 pr-2 rounded d-flex align-items-center bg-dark">
                        Event Control Centre(ECC)
                    </span>
                </div>
                <div className="col-3 no-wrap time-cell">
                    START TIME<br />
                    2:05:44 PM
                </div>
                <div className="col-2 no-wrap time-cell">
                    DURATION<br />
                    5:44 min
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <GoogleMapComponent
                        markers={[currentPos]}
                    />
                </div>
            </div>
            <div className="row table-column">
                <div className="col">
                    <CustomTab tabList={tabList} />
                </div>
                <div className="col">
                    <div class="ht-100p mt-2">
                        <div class="card-header d-flex align-items-center justify-content-between">
                            <h6 class="mg-b-0">Shared files</h6>
                        </div>
                        <ul class="list-group list-group-flush tx-13">
                            <li class="list-group-item d-flex pd-sm-x-20">
                                <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-teal"><i class="icon ion-md-checkmark"></i></span></div>
                                <div class="pd-sm-l-10">
                                    <p class="tx-medium mg-b-0">image.png</p>
                                    <small class="tx-12 tx-color-03 mg-b-0">Konstantin Mar 21, 2019, 3:30pm</small>
                                </div>
                            </li>
                            <li class="list-group-item d-flex pd-sm-x-20">
                                <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-indigo op-5"><i class="icon ion-md-return-left"></i></span></div>
                                <div class="pd-sm-l-10">
                                    <p class="tx-medium mg-b-2">file.png</p>
                                    <small class="tx-12 tx-color-03 mg-b-0">Alex Mar 21, 2019, 1:00pm</small>
                                </div>
                            </li>
                            <li class="list-group-item d-flex pd-sm-x-20">
                                <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-orange op-5"><i class="icon ion-md-bus"></i></span></div>
                                <div class="pd-sm-l-10">
                                    <p class="tx-medium mg-b-2">44333age.png</p>
                                    <small class="tx-12 tx-color-03 mg-b-0">Konstantin Mar 20, 2019, 11:40am</small>
                                </div>
                            </li>
                            <li class="list-group-item d-flex pd-sm-x-20">
                                <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-teal"><i class="icon ion-md-checkmark"></i></span></div>
                                <div class="pd-sm-l-10">
                                    <p class="tx-medium mg-b-0">image578.png</p>
                                    <small class="tx-12 tx-color-03 mg-b-0">Konstantin Mar 20, 2019, 10:30pm</small>
                                </div>
                            </li>
                            <li class="list-group-item d-flex pd-sm-x-20">
                                <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-gray-400"><i class="icon ion-md-close"></i></span></div>
                                <div class="pd-sm-l-10">
                                    <p class="tx-medium mg-b-0">image.png</p>
                                    <small class="tx-12 tx-color-03 mg-b-0">Alex Mar 19, 2019, 12:54pm</small>
                                </div>
                            </li>
                        </ul>
                        <div class="card-footer text-center tx-13">
                            <a href="" class="link-03">View All Files <i class="icon ion-md-arrow-down mg-l-5"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InformationTab;
