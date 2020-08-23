import React, { useState } from 'react';
import Axios from 'axios';
import FileDownload from 'js-file-download';

import Button from '../../../commons/button';
import FilterPopup from './filter';

export function DownloadCSV(props: any) {
  const [response, setResponse] = useState<{
    show: boolean;
    message: string | null;
  }>({ show: false, message: null });
  const [loading, setLoading] = useState(false)

  const token = window.localStorage.getItem('user-token');

  function handleExportKeywords() {
    setLoading(true);
    Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_EXPORT__KEYWORD_CSV_URI}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        FileDownload(response.data, `keywords-${Date.now()}.csv`);
        setLoading(false)
      })
      .catch((error) => {
        setResponse({
          show: true,
          message: error.response.data.message,
        });
        setLoading(false)
        setTimeout(() => {
          setLoading(false)
          setResponse({show: false, message: null });
        }, 3000);
      });
  }
  return (
    <>
      {response.show ? response.message : null}
        {loading ? (
          <Button
          value="Loading"
          buttonClass={props.buttonClass}
        />
        ) : (
          <Button
          value="Download CSV"
          buttonClass={props.buttonClass}
          onClick={handleExportKeywords}
        />
        )}
    </>
  );
}

export function FilterCSV(props: any) {
  const [showPop, setShowPop] = useState<boolean>(false);

  function togglePop() {
    setShowPop(!showPop);
  }

  return (
    <>
      {showPop ? <FilterPopup onClick={togglePop} /> : null}
      <Button
        value="Filter CSV Download"
        buttonClass={props.buttonClass}
        onClick={togglePop}
      />
    </>
  );
}
