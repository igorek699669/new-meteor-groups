import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './index.less';


class AddGroupPage extends Component {
    addGroup = (e) => {
        e.preventDefault()
    };
    render() {
        return(
            <>
                <section className="add-group">
                    <div className="container">
                        <div className="form-wrapper">
                            <form action="" onSubmit={this.addGroup}>
                                <div className="form-wrapper__head-text">Создать сообщество</div>
                                <input type="text" className="input" placeholder='Название'/>
                                <input type="text" className="input" placeholder='Описание'/>
                                <button className="btn">Создать</button>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default withTracker(() => {
    return {

    };
})(AddGroupPage);