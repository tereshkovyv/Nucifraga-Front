import React from "react";
import {ProjectTable2} from "./projectTable2";
import {UserTable} from "./UserTable";

export default function AdminPanel() {
    return (
        <>
            <h1>Admin panel</h1>
            <UserTable />
            <ProjectTable2 />
        </>
    )
}