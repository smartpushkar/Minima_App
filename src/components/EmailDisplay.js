import React, { useState } from 'react';

function EmailDisplay({ email }) {

    const [maskedEmail, setMaskedEmail] = useState("")
  if(email !== undefined && email !== '') {
    const [localPart, domain] = email.split('@');
    const maskedLocalPart = localPart.substring(0, 2) + '*'.repeat(localPart.length - 2);
    const mEmail = `${maskedLocalPart}@${domain}`;
    setMaskedEmail(mEmail)
  }else{
    setMaskedEmail("")
  }
  return (
    <h6 className="fw-bolder">{maskedEmail}</h6>
  );
}

export default EmailDisplay;
