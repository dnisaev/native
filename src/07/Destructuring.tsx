import React, {useState} from 'react';


type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: number }>
    address: {
        street: {
            title: string
        }
    }
}

export const Destructuring: React.FC<PropsType> = (props) => {

    const {title, man: {name}, ...restProps} = props;

    let [message, setMessage] = useState<string>("Hello");

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{name}</div>
            <div>{restProps.car.model}</div>
            <div>{message}</div>
        </div>
    );
};