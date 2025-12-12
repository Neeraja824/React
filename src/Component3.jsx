import React, { useContext } from 'react';
import { NameContext } from './NameContext';
const Component3 = () => {
    const { name, setName } = useContext(NameContext);
    return (
        <div>
            <h2>Component3 Name: {name}</h2>
        </div>
    );
};
export default Component3;