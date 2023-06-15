import React, {useEffect, useState} from 'react';
import {Col, Row, List, Space, Descriptions, Typography, Menu, Divider} from 'antd';
import {Link} from 'react-router-dom';
import styles from './index.module.css';

// @ts-ignore ts-migrate(2700) FIXME: Rest types may only be created from object types.
function BookCover(props) {
    const {books} = props;
    return (
        <div style={{backgroundImage: 'linear-gradient(135deg, #ebedee 10%, #fdfcfb 30%)', padding: '20px', borderRadius: '10px', boxShadow: '0 0 15px #eee'}}>
            {books.map((e, i) => {
                return (
                    <Link to={e.url} target="_blank">
                        <div className={styles.bookWrapper}>
                            <div className={styles.encapsulation}>
                                <Divider style={{marginBottom: '30px', backgroundColor: '#fff'}} />
                                <Divider style={{marginBottom: '30px', backgroundColor: '#fff'}} />
                                <Divider style={{marginBottom: '30px', backgroundColor: '#fff'}} />
                                <Divider style={{marginBottom: '30px', backgroundColor: '#fff'}} />
                            </div>
                            <div className={styles.bookTitle}>
                                <div className={styles.bookContentTitle}>{e.title}</div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
export default BookCover;
