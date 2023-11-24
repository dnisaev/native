import React, {ChangeEvent, MouseEvent} from 'react';

export const UserLesson = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
    };

    const searchUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.value);
    };

    const onAreaChangeHandler = () => { console.log('name changed') };

    const onAreaBlurHandler = () => { console.log('focus lost') };

    const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => { console.log(event.currentTarget.value) };

    return (
        <div>
            <textarea
                tabIndex={1}
                onChange={onAreaChangeHandler}
                onBlur={onAreaBlurHandler}
            >
                Dimych
            </textarea>
            <br/>
            <input tabIndex={2} onChange={onInputChangeHandler} type={'number'}/>
            <br/>
            <button name={'delete'} tabIndex={3} onClick={deleteUser}>delete</button>
            <button name={'search'} tabIndex={4} onClick={searchUser}>search</button>
        </div>
    )
};