import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {

    console.log("Here is the Dashoard")
    return (

        
        <div>
            <h2>DashBoard Page </h2>

            <Counter />

            <ul>
                <li>DashBoard item 1</li>
                <li>DashBoard item 2</li>
                <li>DashBoard item 3</li>
                
                
            </ul>
        </div>
    );
};

export default DashboardPage;