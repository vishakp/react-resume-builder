import React from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';
import { saveAs } from 'file-saver';

const Success = () => {
  const profile = useSelector(state => state.profile);
  axios.post('/create-pdf', profile)
    .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

      saveAs(pdfBlob, 'Resume.pdf');
    });

  return (
    <div className="card animated bounceIn">
      <div className="card-body text-center pt-5 pb-5">
        <i className="fas fa-check-circle fa-7x text-success"></i>
        <h2>Hang Tight while your Resume Downloads!</h2>
        <br />
      </div>

    </div>
  )
}

export default Success
