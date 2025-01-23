import { useState } from "react";
import styles from './MyComponent.module.css';


export const MyComponent = () => {
    const [showRedText, setRedShowText] = useState(false);


    const onClick = () => {
        setRedShowText(!showRedText);
    };
    const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>

     return (
        <>
            { text}
            <button onClick={onClick}>Изменить цвет текста</button>
        </>
     );
};
