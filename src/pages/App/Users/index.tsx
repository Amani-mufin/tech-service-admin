import React, { useState, useEffect } from "react";
import {withRouter} from "react-router-dom"
import "./styles.scss";
import Axios from "axios";
import PersonIcon from "@material-ui/icons/Person";


import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import Dashboard from "../../../components/AppShell";
import { apiBaseUrl } from "../../../config";
import MaterialTable from "material-table";
import DeleteIcon from '@material-ui/icons/Delete';

function Keywords(props:any) {
  const [keywords] = useState<any>(null);
  const [categories] = useState<Array<Record<string, unknown>> | null>(null);
  const [subCategories] = useState<any>(null);
  const [modifiers] = useState<any>(null);
  const [data, setData] = useState<any>([]);

  const token = window.localStorage.getItem("token");
  console.log("aata", data);

  useEffect(() => {
    Axios({
      method: "GET",
      url: `${apiBaseUrl}/hr/talents`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log("response.data", response.data.payload);
        setData(response.data.payload);
        // FileDownload(response.data, `keywords-${Date.now()}.csv`);
      })
      .catch((error) => {
        // setResponse({ show: true, message: error.response.data.message });
        setTimeout(() => {
          // setResponse({ show: false, message: null });
        }, 3000);
      });
  }, []);

  return (
    <Dashboard>
      <div className="body_container">
        <div className="table-area1">
          <div className="keyword_button">
            {/* <button className="btton">Add Talent</button> */}
          </div>

          <MaterialTable
            title="TALENT TABLE"
            columns={[
              { title: "First Name", field: "firstName" },
              { title: "Last Name", field: "lastName" },
              { title: "Email", field: "user.email" },
              { title: "Location", field: "state" },
              {
                title: "Seniority",
                field: "seniority",
              },
            ]}
            data={data}
            options={{
              exportButton: true,
              pageSize: 20,
              actionsColumnIndex: -1,
              headerStyle: {
                backgroundColor: '#59A75D',
                color: '#FFF'
              }
            }}
            actions={[
              {
                icon: PersonIcon,
                tooltip: "View Profile",

                // Work on dynamic values
                onClick: (event, rowData) => props.history.push(`/app/talent/2`),
              },
              {
                icon: DeleteIcon,
                tooltip: "Delete User",

                // Work on dynamic values
                onClick: (event, rowData) => "res",
              },
            ]}
          />
        </div>
      </div>
    </Dashboard>
  );
}

export default withRouter(Keywords);
