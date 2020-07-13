import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {Groups} from "../../../api/groups";
import { Meteor } from 'meteor/meteor';

export const AddGroupPage = () =>{
    const name = useRef(null);
    const description = useRef(null);
    const file = useRef(null);
    const addGroupHandler = (e) => {
        e.preventDefault();
        const nameVal = name.current.value.trim();
        const descrVal = description.current.value.trim();
        // const fileUrl = window.URL.createObjectURL(file.current.files[0]);
        Meteor.call('groups.insert', nameVal , descrVal );
        name.current.value= '';
        description.current.value = '';

    };
    return(
        <>
            <section className="add-group">
                <div className="container">
                    <div className="form-wrapper">
                        <form onSubmit={addGroupHandler}>
                            <div className="form-wrapper__head-text">Создать сообщество</div>
                            <input type="text" className="input" placeholder='Название' ref={name}/> <br/>
                            <input type="text" className="input" placeholder='Описание' ref={description}/> <br/>
                            <input type='file' className='file-loader' ref={file}/> <br/>
                            <button className="btn">Создать</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
};