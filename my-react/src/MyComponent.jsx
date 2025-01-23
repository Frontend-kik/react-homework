import { useState } from "react";

const products = [
    {id: 'qwe', name: "Чайник"},
    {id: 'zxc', name: "Утюг"}

];
export const MyComponent = () => {
     return ( <ul>
            {products.map(({id, name}) => (
                <li key={id}>{name}</li>
            ))}
            </ul>
     );
};
