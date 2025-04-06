import React from 'react';
import Activity from './Components/Activity';
import Numeric from './Components/Numeric';
import Expert from './Components/Expert';

const page = () => {
    return (
        <div>
            <Activity/>
            <Numeric/>
            <Expert/>
        </div>
    );
};

export default page;