
import React, {useEffect}  from "react"
import { List } from 'antd';

function Publicity() {
    const data = [
        {
            url: 'https://mp.weixin.qq.com/s/YgTDBJWFB12IyQKDOja2zw',
            name: '关于子平玄珠的几点研究之辟谬'
        },
        {
            url: 'https://mp.weixin.qq.com/s/evndpRhbWp5EEcM8D35xNA',
            name: '关于《子平玄珠》中徐阶阁老的命理研究'
        },
        {
            url: 'https://mp.weixin.qq.com/s/EAIOVykLT2tbGhqeGR2UxQ',
            name: '关于子平玄珠的几点研究之官制'
        },
        {
            url: 'https://mp.weixin.qq.com/s/rpi58KzbIycxPQJmFWTiCg',
            name: '关于《子平玄珠》中康海状元的命理研究'
        }
      ];
  return (
    <>
        <List
            size="large"
            header={<div>宣传··</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item><a href={item.url} target='_blank'>{item.name}</a></List.Item>}
        />
    </>
  );
}
export default Publicity;