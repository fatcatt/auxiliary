import React, { useEffect } from "react";
import IpDesc from './IpDesc/index.tsx'
import PublicClass from './PublicClass/index.tsx'
import Publicity from './Publicity/index.tsx'
import { Col, Row } from 'antd';
import './index.css'

// @ts-ignore ts-migrate(2700) FIXME: Rest types may only be created from object types.
export default function Index () {
    return (
        <div className="boxWrapper">
            <Row justify="space-between">
                <Col span={17}>
                    <PublicClass></PublicClass>
                </Col>
                <Col span={6}>
                    <Publicity></Publicity>
                </Col>
            </Row>
        </div>
    )
}

