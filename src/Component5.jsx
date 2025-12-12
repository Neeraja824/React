import React, { useContext } from 'react';
import { NameContext } from './NameContext';
const Component5 = () => {
    const { name } = useContext(NameContext);
    return <h2>Component5 Name: {name}</h2>;
};
export default Component5;