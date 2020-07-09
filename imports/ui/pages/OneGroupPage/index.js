import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';


class OneGroupPage extends Component {
    render() {
        return(
            <>
                <section className="onegroup">
                    <div className="container">
                        <div className="top-wrapper">
                            <div className="image">
                                <img src="" alt=""/>
                            </div>
                            <div className="r-col">
                                <div className="r-col__head-text">Пушистые истории</div>
                                <div className="r-col__numbers">участники: 123</div>
                                <div className="r-col__description">
                                    Все самое отборное и смешное про пушстые истории
                                </div>
                                <button className="button">Подписаться</button>
                            </div>
                        </div>
                        <div className="posts-wrapper">
                            <div className="post-item">
                                <div className="top-wrapper">
                                    <div className="image">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="r-col">
                                        <div className="r-col__head-text">
                                            Пушистые истории
                                        </div>
                                        <div className="r-col__date">
                                            08.07.2020
                                        </div>
                                    </div>
                                </div>
                                <div className="post-item__description">
                                    Первая раскраска вашего малыша поможет раскрыть творческие способности и развить мелкую моторику ребёнка.
                                    Начинаем с самого простого - крупные рисунки, толстый контур и яркие цвета. Можно раскрашивать красками и фломастерами.
                                </div>
                                <div className="bottom-wrapper">
                                    <div className="likes-wrapper">
                                        <div className="image">
                                            <img src="" alt=""/>
                                        </div>
                                        <div className="likes-wrapper__count">53</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default withTracker(() => {
    Meteor.subscribe('groups');
    return {
        groups: Groups.find({},{ sort: { createdAt: -1 }}).fetch()
    }
})(OneGroupPage);