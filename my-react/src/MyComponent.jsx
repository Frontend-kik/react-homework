import { useState } from "react";


export const MyComponent = () => {
    const [showText, setShowText] = useState(true);


    const onClick = () => {
        setShowText(!showText);
    };
    const text = <div>Текст</div>

     return (
        <>
            {showText && text}
            <button onClick={onClick}>{showText ? 'Скрыть' : 'Показать'}</button>
        </>
     );
};
