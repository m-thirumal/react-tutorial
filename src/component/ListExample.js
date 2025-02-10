const ListExample = () => {
    const employees = [
        { 
            id: 1, 
            name: 'Thirumal',
            email: 'thirumal@gmail.com',
            dob: '02-04-1991'
        },
        { 
            id: 2, 
            name: 'James',
            email: 'james@gmail.com',
            dob: '02-04-1991'
        },
        { 
            id: 1, 
            name: 'Jessica',
            email: 'jessica@gmail.com',
            dob: '02-04-1991'
        },
        { 
            id: 1, 
            name: 'Kate',
            email: 'kate@gmail.com',
            dob: '02-04-1991'
        },
    ]
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.dob}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    ); 
}

export default ListExample;