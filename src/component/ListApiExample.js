import { getPosts } from "../service/ListApiExampleService";
import { useEffect, useState } from "react";

const ListApiExample = () => {
    const [data, setData] = useState([]); 
    useEffect(() => {
        getPosts().then((response) => {
            setData(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, [])

    return (
        <div  className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>UserID</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(d => (
                            <tr key={d.id}>
                                <td>{d.userId}</td>
                                <td>{d.id}</td>
                                <td>{d.title}</td>
                                <td>{d.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );

}

export default ListApiExample;