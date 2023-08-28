"use client"
import { useEffect, useState } from "react";

const Data = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await fetch("/api/data", { cache: "no-store" });
        const users = await response.json();
        setData(users);
    };
    useEffect(() => {
        getData()
    }, []);



    return (
        <div className="container">
            <h1>Data</h1>
            {data.map(datum => (
                <div key={datum._id} className="card" style={{ width: "50rem", font: "caption" }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">id: <input type="text" readOnly value={datum._id} /></li>
                        <li className="list-group-item">username: <input type="text" readOnly value={datum.username} /></li>
                        <li className="list-group-item">password: <input type="text" readOnly value={datum.password} /></li>
                    </ul>
                </div>

            ))}
        </div>
    )
}
export default Data