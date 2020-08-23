import React from 'react'
import { withRouter } from "react-router-dom";
import Dashboard from "../../../components/AppShell"

function app() {
    return (
        <Dashboard>
            Settings
        </Dashboard>
    )
}
export default withRouter(app)
