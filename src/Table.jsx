import React, { useState, useMemo } from 'react';
import './Table.css'; // Assuming you will adapt the previous CSS for styling

const initialData = [
    { NAME: "SAILU", DEPARTMENT: "AIML", SALARY: 6.0, YEAR: 2025, STATUS: "Placed", COMPANY: "TechCorp" },
    { NAME: "SNEHA", DEPARTMENT: "IT", SALARY: 8.1, YEAR: 2025, STATUS: "Placed", COMPANY: "GlobalSoft" },
    { NAME: "ABHI", DEPARTMENT: "CSE", SALARY: 9.5, YEAR: 2025, STATUS: "Placed", COMPANY: "InnovateX" },
    { NAME: "NIKHIL", DEPARTMENT: "DS", SALARY: 5.9, YEAR: 2024, STATUS: "Applied", COMPANY: "DataStream" },
    { NAME: "ADITYA", DEPARTMENT: "ECE", SALARY: 9.0, YEAR: 2024, STATUS: "Placed", COMPANY: "ElectroHub" },
    { NAME: "PRIYA", DEPARTMENT: "AIML", SALARY: 8.5, YEAR: 2023, STATUS: "Placed", COMPANY: "AI-Solutions" },
    { NAME: "RAHUL", DEPARTMENT: "IT", SALARY: 6.8, YEAR: 2023, STATUS: "Applied", COMPANY: "NetLink" },
    { NAME: "ANITA", DEPARTMENT: "CSE", SALARY: 7.2, YEAR: 2022, STATUS: "Interview", COMPANY: "CodeMasters" },
    { NAME: "RAM", DEPARTMENT: "DS", SALARY: 5.5, YEAR: 2022, STATUS: "Placed", COMPANY: "DataCo" },
    { NAME: "MEERA", DEPARTMENT: "ECE", SALARY: 8.3, YEAR: 2021, STATUS: "Placed", COMPANY: "CircuitPro" },
];
const ITEMS_PER_PAGE = 5;
const Table = () => {
    const [filterYear, setFilterYear] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const getStatusClass = (status) => {
        switch (status) {
            case 'Placed':
                return 'status-placed'; 
            case 'Interview':
                return 'status-interview'; 
            case 'Applied':
                return 'status-applied'; 
            default:
                return '';
        }
    };

    const filteredData = useMemo(() => {
        return initialData.filter(item =>
            filterYear === 'All' || item.YEAR === parseInt(filterYear)
        );
    }, [filterYear]);

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

    const currentData = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredData.slice(startIndex, endIndex);
    }, [filteredData, currentPage]);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const uniqueYears = ['All', ...new Set(initialData.map(item => item.YEAR))].sort((a, b) => b - a);

    return (
        <div className="table-card">
            <div className="table-header-row">
                <h2 className="table-title">Salary Status</h2>
                <select 
                    className="status-dropdown" 
                    value={filterYear}
                    onChange={(e) => {
                        setFilterYear(e.target.value);
                        setCurrentPage(1); 
                    }}
                >
                    {uniqueYears.map(year => (
                        <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>
                    ))}
                </select>
            </div>
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary (LPA)</th>
                        <th>Year</th>
                        <th>Company</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((tx, index) => (
                        <tr key={index}>
                            <td className="name-cell">
                                <span className="avatar-placeholder" />
                                {tx.NAME}
                            </td>
                            <td>{tx.DEPARTMENT}</td>
                            <td className="amount-credit">
                                ${tx.SALARY.toFixed(1)}
                            </td>
                            <td>{tx.YEAR}</td>
                            <td>{tx.COMPANY}</td>
                            <td>
                                <span className={`status-badge ${getStatusClass(tx.STATUS)}`}>
                                    {tx.STATUS}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-footer">
                <div className="transaction-count">
                    Showing {currentData.length} of {filteredData.length} Placements
                </div>
                <div className="pagination">
                    <button 
                        className="pagination-arrow" 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button 
                            key={page}
                            className={`pagination-page ${currentPage === page ? 'active' : ''}`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button 
                        className="pagination-arrow" 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages || totalPages === 0}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;