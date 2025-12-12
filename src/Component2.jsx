import React, { useContext } from 'react';
import { NameContext } from './NameContext';
const Component2 = () => {
    const { name } = useContext(NameContext);
    return <h2>Component2 Name: {name}</h2>;
};
export default Component2;