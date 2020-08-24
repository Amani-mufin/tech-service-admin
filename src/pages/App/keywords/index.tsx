import React, { useState, useEffect } from "react";
import "./styles.scss";
import Axios from "axios";

import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import Dashboard from "../../../components/AppShell";
import { apiBaseUrl } from "../../../config";

function Keywords() {
  const [keywords] = useState<any>(null);
  const [categories] = useState<Array<Record<string, unknown>> | null>(null);
  const [subCategories] = useState<any>(null);
  const [modifiers] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const token = window.localStorage.getItem("token");

  useEffect(()=>{

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
  },[])

  return (
    <Dashboard>
      <div className="body_container">
        <div className="table-area">
          <div className="keyword_button">
            <button>Export as csv</button>
          </div>
          <table className="keywords-table">
            <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Location</td>
                <td>Seniority</td>
                <td></td>

              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item: any, index: any) => (
                  <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.user.email}</td>
                    <td>{item.state}, {item.country}</td>
                    <td>{item.seniority}</td>
                    <td><button>View Profile</button></td>
                  </tr>
                ))}

             
            </tbody>
          </table>
        </div>
      </div>
    </Dashboard>
  );
}

export default Keywords;
