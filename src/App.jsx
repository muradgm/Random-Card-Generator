import React, {useEffect, useState} from 'react';

import generateFakeData, { tableHeader, tableData } from './lib/fake.js'
import randomColor, { randomGradient } from './lib/randomColor.js'
import './base.scss'

export default function App() {
    const data = generateFakeData()
    const [newData, setNewData] = useState();
    const header = tableHeader(data)
    const body = tableData(data)

    const handleClick = () => { 
        setNewData(data)
    }


    console.log(header);

    return (
        <main>
            <div className="header">
                <h1>random card generator</h1>
                <button className="btn" onClick={handleClick}>generate new cards</button>
            </div>
            <ol>
                {data.map((item, i) => (
                    <li key={i} className="card" style={{ background: `${randomGradient()}` }}
                    >
                        <img src={item.avatar} alt="avatar" />
                        <p style={{fontWeight: 700}}>Hey, </p><p> I'm <strong>{item.name}</strong>,</p><p> I'm from <strong>{item.city}</strong></p>
                        <span className="line"></span>
                        <p>lets get in touch : </p><p>{item.telephone}</p></li>
                ))}
            </ol>
        </main>
    )
}