import { useFetcher, useNavigate, useParams } from 'react-router-dom';
import './PersonDetail.css'
import { useEffect, useState } from 'react';
import { deleteData, editData, peoplesData } from '../Home/Home';

const PersonDetail = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [person, setPerson] = useState({
        name: "",
        area: "",
        contact_no: "",
        exp: ""
    })
    const [editable, setEditable] = useState(false)




    const handleEdit = (e) => {
        setEditable(true)
    }
    const handleSave = (e) => {
        editData(params.id, person)
        navigate(-1)
    }
    const handleDelete = (e) => {
        deleteData(params.id)
        navigate("/")
    }
    const handleChange = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const info = peoplesData.filter(people => (people.id === parseInt(params.id)))
        setPerson(info[0])
    }, [params.id])
    return (
        <div className='personDetails-container'>
            <h2>{editable ? "Edit Employee Details" : "Employee Details"}</h2>
            <div className='info'>
                {!editable &&
                    <div>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={e => setIsModelOpen(true)}>Delete</button>
                    </div>}

                <div className='data'>
                    <label >Name</label>
                    {
                        !editable ? <span>: {person?.name}</span> : <input type="text" name='name' value={person.name} onChange={handleChange} />
                    }
                </div>
                <div className='data'>
                    <label >Area</label>
                    {
                        !editable ? <span>: {person?.area}</span> : <input type="text" name='area' value={person.area} onChange={handleChange} />
                    }
                </div>
                <div className='data'>
                    <label >Contact No</label>
                    {
                        !editable ? <span>: {person?.contact_no}</span> : <input type="number" maxLength={10} name='contact_no' value={person.contact_no} onChange={handleChange} />
                    }
                </div>
                <div className='data'>
                    <label >Experience Year</label>
                    {
                        !editable ? <span>: {person?.exp}</span> : <input type="number" name='exp' value={person?.exp} onChange={handleChange} />
                    }
                </div>
                {
                    editable && <div style={{ margin: '1rem 0' }}>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={(e) => setEditable(false)}>Cancel</button>
                    </div>
                }
            </div>
            {
                isModelOpen &&
                <div className="modal-container">
                    <div className="modal">
                        <p>Are you sure you
                            want to delete this item?</p>
                        <div>
                            <button onClick={e => setIsModelOpen(false)} className='secondary'>Cancel</button>

                            <button onClick={handleDelete}
                                className='danger'
                            >Yes</button>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default PersonDetail