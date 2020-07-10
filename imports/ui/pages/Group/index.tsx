import React from 'react';
import { useRouteParameter, useSubscription } from '../../../lib/client/reactHooks';

export const GroupPage = () => {
    const groupId = useRouteParameter('groupId');

    useSubscription('groups.view', groupId);

    return (
        <>
            <section className="onegroup">
                <div className="container">
                    <div className="top-wrapper">
                        <div className="image">
                            <img src="" alt="" />
                        </div>
                        <div className="r-col">
                            <div className="r-col__head-text">Пушистые истории {groupId}</div>
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
                                    <img src="" alt="" />
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
                                        <img src="" alt="" />
                                    </div>
                                    <div className="likes-wrapper__count">53</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
