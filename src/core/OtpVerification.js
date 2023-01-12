import React, { useState } from 'react';
import { sendOtp, verifyOtp } from './helper/otpverificationHelper';

const OtpVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = (phoneNumber) => {
    setIsSendingOtp(true);
    setError('');
    console.log(phoneNumber);
    sendOtp({ phoneNumber }).then((res) => {
      console.log('HELLOOOOOOO', res);
      setQrCodeUrl(res.qrCodeUrl);
      setIsSendingOtp(false);
    });

    // API
    //   .post('/sendOtp', { phoneNumber })
    //   .then(res => {
    //     setQrCodeUrl(res.data.qrCodeUrl);
    //     setIsSendingOtp(false);
    //   })
    //   .catch(err => {
    //     setIsSendingOtp(false);
    //     setError(err.response.data);
    //   });
  };

  const handleVerifyOtp = (phoneNumber, otp) => {
    setIsVerifyingOtp(true);
    setError('');

    verifyOtp({ phoneNumber, otp }).then((res) => {
      if (res) {
        setIsVerifyingOtp(false);
        console.log('otp verified');
      } else {
        setIsVerifyingOtp(false);
        setError('Error while verifying');
      }
    });

    // API
    //   .post('/verifyOtp', { phoneNumber, otp })
    //   .then(() => {
    //     // OTP verification succeeded, so close the form or navigate to the next step
    //     setIsVerifyingOtp(false);
    //     // ...
    //   })
    //   .catch(err => {
    //     setIsVerifyingOtp(false);
    //     setError(err.response.data);
    //   });
  };

  return (
    <form>
      {/* <label htmlFor="phoneNumber">Phone number:</label>
      <input
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => {
          console.log(e);
          setPhoneNumber(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          handleSendOtp(phoneNumber);
        }}
        disabled={isSendingOtp}
      >
        Send OTP via WhatsApp
      </button>

      {!isSendingOtp && (
        <>
          {qrCodeUrl && (
            <>
              <p>Scan the QR code to send the OTP via WhatsApp:</p>
              <img src={qrCodeUrl} alt="WhatsApp QR code" />
              <button type="button" onClick={() => window.open(qrCodeUrl)}>
                Open in browser
              </button>
            </>
          )}
          <label htmlFor="otp">OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              handleVerifyOtp(phoneNumber, otp);
            }}
            disabled={isVerifyingOtp}
          >
            Verify OTP
          </button>
        </>
      )}
      {error && <p>{error}</p>} */}

        <button
          type="button"
          onClick={window.open('https://dmxs8.authlink.me', '_self')}
          style={{border: "none", background: "transparent", outline: "none"}}
        >
          <img
            src="https://otpless-cdn.s3.ap-south-1.amazonaws.com/otpless_button.svg"
            style={{width: "300px"}}
          />
        </button>
    </form>
  );
};

export default OtpVerification;
