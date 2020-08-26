import React from 'react'
import { withRouter } from "react-router-dom";
import Dashboard from "../../../components/AppShell"
import "./style.scss"

function app() {
    return (
        <Dashboard>
            <div className="coming-soon-img">
            <img src="/assets/images/coming-soon.png" alt="comming soon" />
            </div>
            <h1>
                Coming soon
            </h1>
        </Dashboard>
    )
}
export default withRouter(app)
