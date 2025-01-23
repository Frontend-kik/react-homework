import { useState } from "react";

const getTimeFromDate = (date) => date.toISOString().substring(11, 19);
export const MyComponent = () => {
     // 1. Состояние
    // const [currentDate, setCurrentDate] = useState(new Date());
    // setTimeout(() => {
    //     setCurrentDate(new Date());
    // }, 1000)
     // return <div>{getTimeFromDate(currentDate)}</div>

    // 2. Иммутабельность
        const [obj, setObj] = useState({a: 10, b: 20, c: 30});
        // obj.a = 20;     // неправильно так переопределять , нужно через setObj
        // setObj({a: 10, b: 20, c: 30});
        if (obj.a === 10) {
            setObj({...obj, a:20});      // переопределение с помощью оператора rest
        }
        return <div>{obj.a}</div>;
}
