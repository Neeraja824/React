import React, { useContext } from 'react';
import { NameContext } from './NameContext';
const Component1 = () => {
    const { name } = useContext(NameContext);
    return <h2>Component1 Name: {name}</h2>;
};
export default Component1;