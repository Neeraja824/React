import { useState, useEffect } from "react";
import "./CardTask.css";
function Card() {
    const [completeData, setcompleteData] = useState([
        { name: "Neeraja", Roll: "23p31a1209" },
        { name: "Akshaya", Roll: "23p31a1218" },
        { name: "Umadevi", Roll: "23p31a1290" },
        { name: "Anusha", Roll: "23p31a1229" },
        { name: "Bhavani", Roll: "23p31a1223" },
        { name: "Aditya", Roll: "23p31a1289" },
    ]);
    const [QueryResult, setQueryResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        setQueryResult(completeData);
    }, [completeData]);

    useEffect(() => {
        const filtered = completeData.filter(
            (ele) =>
                ele.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ele.Roll.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setQueryResult(filtered);
    }, [searchTerm, completeData]);
    return (
        <div className="parent">
            <input
                type="text"
                placeholder="Search..."
                className="search-box"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="cards-container">
                {QueryResult.map((ele, index) => (
                    <div className="card" key={index}>
                        <h2>{ele.name}</h2>
                        <h3>{ele.Roll}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Card;