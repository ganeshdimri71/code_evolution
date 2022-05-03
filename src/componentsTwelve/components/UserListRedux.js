import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../redux/features/userFeatures";

const UserListRedux = () => {
    let userState = useSelector(state => state.users)
    let dispatch = useDispatch()

    useEffect(async () => {
        dispatch(getAllUsers())
    }, [dispatch]);

    let { loading, errorMessage, users } = userState;
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">User List</p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                            velit incidunt totam voluptate optio eveniet doloribus fuga
                            ratione ab sint.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {loading && <h2>...Loading</h2>}
                        {!loading && errorMessage.length>0 && (
                            <h3 className="text-danger">{errorMessage}</h3>
                        )}
                        {!loading && users.length > 0 && (
                            <table className="table table-hover text-center table-striped">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Website</th>
                                        <th>Company</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.website}</td>
                                                <td>{user.company.name}</td>
                                                <td>{user.address.city}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserListRedux;




