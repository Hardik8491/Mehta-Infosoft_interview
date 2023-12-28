import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"
export let peoplesData = [
    {
        id: 1,
        name: "Mr. Mihir Kapoor",
        area: "Ahmedabad",
        contact_no: 9999999999,
        exp: 15
    },
    {
        id: 2,
        name: "Ms. Kinjal Sharma",
        area: "Surat",
        contact_no: 9888888888,
        exp: 10
    },
    {
        id: 3,
        name: "Mr. Tejashree Verma",
        area: "Vadodara",
        contact_no: 9777777777,
        exp: 8
    },
    {
        id: 4,
        name: "Mr. Mayur Sharma",
        area: "Rajkot",
        contact_no: 9666666666,
        exp: 17
    },
    {
        id: 5,
        name: "Mr. Hardik Kewat",
        area: "Gandhinagar",
        contact_no: 9555555555,
        exp: 3
    }
];
export const deleteData = (id) => {
    peoplesData = peoplesData.filter(people => (people.id !== parseInt(id)))

}
export const editData = (id, data) => {
    peoplesData = peoplesData.map(p => {
        if (p.id == id) {
            return data;
        }
        return p;
    })
}
const Home = () => {

    const navigate = useNavigate()
    const theadData = ["Name", "Area", "Contact No", "Experience Year"]


    const handleClick = (id) => {
        return navigate(`/${id}`)
    }

    return (<div className='main_container'>
        <table>
            <thead>
                <tr>
                    {theadData.map(heading => {
                        return <th key={heading}>{heading}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {peoplesData.map((row) => {
                    return <tr key={row.id} className={`${row.exp >= 15 ? "bg-yellow" : row.exp < 5 ? "bg-light-red" : ""}`} onClick={e => handleClick(row.id)}>

                        <td key={row.name}>{row.name}</td>
                        <td key={row.area}>{row.area}</td>
                        <td key={row.contact_no}>{row.contact_no}</td>
                        <td key={row.exp}>{row.exp}</td>

                    </tr>;
                })}
            </tbody>
        </table>
    </div>
    )
}
export default Home