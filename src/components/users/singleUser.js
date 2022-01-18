import React from "react";

export function SingleUser({user, onClick}) {
    if (!user) {
        return null;
    }

    return (
        <div className={(onClick) ? "single-user user-clickable" : "single-user"} onClick={(onClick) ? () => onClick(user) : null}>
            <table className={(onClick) ? "single-user-table table table-striped user-table-clickable" : "single-user-table table table-striped"}>
                <tbody>
                    <tr className="user-table-header">
                        <th colSpan={2}>
                            {user.username}
                        </th>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{user.name} </td>
                    </tr>

                    <tr>
                        <td>Email:</td>
                        <td>{user.email} </td>
                    </tr>

                    <tr>
                        <td>Phone Number:</td>
                        <td>{user.phone} </td>
                    </tr>

                    <tr>
                        <td>Address:</td>
                        <td>{user.address}</td>
                    </tr>

                </tbody>

            </table>
        </div>
    );
}

export default SingleUser