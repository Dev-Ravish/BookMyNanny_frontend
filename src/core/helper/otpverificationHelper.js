import { API } from '../../backend';

//   const handleSendOtp = () => {
//     setIsSendingOtp(true);
//     setError('');

export const sendOtp = (phoneNumber) => {
  return fetch(`${API}/sendOtp`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(phoneNumber),
  }).then((res) => {
    return res.json();
  });
};

export const verifyOtp = ({ phoneNumber, otp }) => {
  return fetch(`${API}/verifyOtp`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: { phoneNumber, otp },
  })
    .then(() => {
      return true;
    })
    .catch((err) => {
      
      console.log(err)
    return false});
};

//     API
//       .post('/sendOtp', { phoneNumber })
//       .then(res => {
//         setQrCodeUrl(res.data.qrCodeUrl);
//         setIsSendingOtp(false);
//       })
//       .catch(err => {
//         setIsSendingOtp(false);
//         setError(err.response.data);
//       });
//   }

//   const handleVerifyOtp = () => {
//     setIsVerifyingOtp(true);
//     setError('');

//     API
//       .post('/verifOtp', { phoneNumber, otp })
//       .then(() => {
//         // OTP verification succeeded, so close the form or navigate to the next step
//         setIsVerifyingOtp(false);
//         // ...
//       })
//       .catch(err => {
//         setIsVerifyingOtp(false);
//         setError(err.response.data);
//       });
//   };
