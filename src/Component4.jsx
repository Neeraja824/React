import React, { useContext } from 'react';
import { NameContext } from './NameContext';
const Component4 = () => {
    const { name } = useContext(NameContext);
    return <h2>Component4 Name: {name}</h2>;
};
export default Component4;