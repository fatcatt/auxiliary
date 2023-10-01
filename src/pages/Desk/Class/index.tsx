import React, {useEffect, useState} from 'react';
import IpDesc from './IpDesc/index.tsx';
import PublicClass from '../PublicClass/index.tsx';
import Publicity from '../Publicity/index.tsx';
import Book from '../Book/index.tsx';
import Grave from '../Grave/index.tsx';
import {Col, Row, List, Space, Tabs} from 'antd';
import {useNavigate} from 'react-router-dom';
import {parseUrlParams} from '../../../utils/index';

import styles from './index.module.scss';

// @ts-ignore ts-migrate(2700) FIXME: Rest types may only be created from object types.
export default function Index() {
    const {page} = parseUrlParams();
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState('publicclass');

    useEffect(() => {
        setActiveKey(page);
    }, [page]);
    const onChange = (e) => {
        navigate(`/home?page=${e}`);
    };
    return (
        <div className={styles.boxWrapper}>
            <Row justify="space-between">
                <Col span={17}>
                    <PublicClass></PublicClass>
                </Col>
                <Col span={6}>
                    <Publicity></Publicity>
                </Col>
            </Row>
        </div>
    );
}
