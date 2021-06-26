import React from 'react'
import { Table, Tag, Space } from 'antd';

export default function AdminComponent() {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            responsive: ['xs','sm','md','lg','xl'],
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            responsive: ['sm','md','lg', 'xl'],
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            responsive: ['md', 'lg', 'xl'],
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            responsive: ['md','lg', 'xl'],
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <div>
            <div style={{ overflow: 'scroll'}}>

                <Table columns={columns} dataSource={data} size='small' pagination={ {position:['bottomCenter']}} />
            </div>
        </div>
    )
}
