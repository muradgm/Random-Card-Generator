import generateFakeData, { tableHeader, tableData }from './lib/fake.js'
import randomColor, { randomGradient } from './lib/randomColor.js'
import './base.scss'

export default function App() {
    const data = generateFakeData()
    const header = tableHeader(data)
    const body = tableData(data)

    console.log(header);

    return (
        <main>
            <ol>
                {data.map((item, i) => (
                    <li key={i} className="card" style={{ background: `${randomGradient()}` }}><p>Hey, </p><p> I'm <strong>{item.name}</strong></p>and i live in <strong>{item.city}</strong>
                        <p>lets get in touch : </p>{item.telephone}</li>
                ))}
            </ol>
        </main>
    )
}