import React, { useState, useEffect, useRef } from 'react';

const Captcha = () => {
  const [captchaCode, setCaptchaCode] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const captchaCanvas = useRef(null);

  // Function to generate random code
  const generateCaptcha = () => {
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptchaCode(randomCode);
    drawCaptcha(randomCode);
  };

  // Draw CAPTCHA with distortions and background lines
  const drawCaptcha = (code) => {
    const canvas = captchaCanvas.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background noise lines
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * 100, Math.random() * 50);
      ctx.lineTo(Math.random() * 100, Math.random() * 50);
      ctx.strokeStyle = 'rgba(0,0,0,0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Draw CAPTCHA text with random rotations, scaling, and positions
    ctx.font = 'bold 28px Courier New';
    ctx.fillStyle = '#000';
    let x = 10;
    for (let i = 0; i < code.length; i++) {
      const letter = code[i];
      ctx.save();
      const angle = Math.random() * 0.4 - 0.2; // Rotate between -0.2 to 0.2 radians
      const scale = Math.random() * 0.3 + 0.8; // Scale between 0.8 to 1.1
      ctx.translate(x, 35);
      ctx.rotate(angle);
      ctx.scale(scale, scale);
      ctx.fillText(letter, 0, 0);
      ctx.restore();
      x += 20;
    }

    // Add more noise with random dots
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 100, Math.random() * 50, 1, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.fill();
    }
  };

  // Validate input
  const validateCaptcha = () => {
    if (inputValue === captchaCode) {
      setIsVerified(true);
      alert('CAPTCHA verified successfully!');
    } else {
      setIsVerified(false);
      alert('CAPTCHA does not match!');
    }
  };

  // Refresh CAPTCHA
  const refreshCaptcha = () => {
    generateCaptcha();
    setInputValue('');
    setIsVerified(false);
  };

  // Initialize CAPTCHA code on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="max-w-sm mx-auto bg-white p-4 rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <canvas
          ref={captchaCanvas}
          width="150"
          height="50"
          className="bg-gray-100 border rounded"
        />
        <button
          onClick={refreshCaptcha} size
          className="bg-gray-300 p-2 rounded hover:bg-gray-400 ml-2"
        >
          🔄
        </button>
      </div>
      <input
        type="text"
        placeholder="Please retype the code above"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={validateCaptcha}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Verify
      </button>
      {isVerified && <p className="text-green-500 mt-2">CAPTCHA verified!</p>}
    </div>
  );
};

export default Captcha;


// import React, { useState, useEffect, useRef } from 'react';

// const ReactCaptcha = () => {
//   const [captchaCode, setCaptchaCode] = useState('');
//   const [inputValue, setInputValue] = useState('');
//   const [isVerified, setIsVerified] = useState(false);
//   const [message, setMessage] = useState('');
//   const captchaCanvas = useRef(null);

//   // Function to generate random code
//   const generateCaptcha = () => {
//     const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
//     setCaptchaCode(randomCode);
//     drawCaptcha(randomCode);
//   };

//   // Draw CAPTCHA with distortions and background lines
//   const drawCaptcha = (code) => {
//     const canvas = captchaCanvas.current;
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Draw background noise lines
//     for (let i = 0; i < 7; i++) {
//       ctx.beginPath();
//       ctx.moveTo(Math.random() * 150, Math.random() * 50);
//       ctx.lineTo(Math.random() * 150, Math.random() * 50);
//       ctx.strokeStyle = 'rgba(0,0,0,0.3)';
//       ctx.lineWidth = 1.5;
//       ctx.stroke();
//     }

//     // Draw CAPTCHA text with random rotations, scaling, and positions
//     ctx.font = 'bold 28px Courier New';
//     ctx.fillStyle = '#000';
//     let x = 15;
//     for (let i = 0; i < code.length; i++) {
//       const letter = code[i];
//       ctx.save();
//       const angle = Math.random() * 0.4 - 0.2; // Rotate between -0.2 to 0.2 radians
//       const scale = Math.random() * 0.3 + 0.8; // Scale between 0.8 to 1.1
//       ctx.translate(x, 35);
//       ctx.rotate(angle);
//       ctx.scale(scale, scale);
//       ctx.fillText(letter, 0, 0);
//       ctx.restore();
//       x += 25;
//     }

//     // Add more noise with random dots
//     for (let i = 0; i < 30; i++) {
//       ctx.beginPath();
//       ctx.arc(Math.random() * 150, Math.random() * 50, 1, 0, 2 * Math.PI);
//       ctx.fillStyle = 'rgba(0,0,0,0.3)';
//       ctx.fill();
//     }
//   };

//   // Validate input
//   const validateCaptcha = () => {
//     if (inputValue === captchaCode) {
//       setIsVerified(true);
//       setMessage('CAPTCHA verified successfully!');
//     } else {
//       setIsVerified(false);
//       setMessage('CAPTCHA does not match!');
//       setTimeout(()=>{
//         setMessage("");
//       },4000)
//     }
//   };

//   // Refresh CAPTCHA
//   const refreshCaptcha = () => {
//     generateCaptcha();
//     setInputValue('');
//     setIsVerified(false);
//     setMessage('');
//   };

//   // Initialize CAPTCHA code on mount
//   useEffect(() => {
//     generateCaptcha();
//   }, []);

//   return (
//     <div className="max-w-sm mx-auto bg-white p-4 rounded shadow">
//       <div className="flex items-center justify-between mb-4">
//         <canvas
//           ref={captchaCanvas}
//           width="200"
//           height="50"
//           className="bg-gray-100 border rounded"
//         />
//         <button
//           onClick={refreshCaptcha}
//           className="bg-gray-300 p-2 rounded hover:bg-gray-400 ml-2"
//         >
//           🔄
//         </button>
//       </div>
//       <input
//         type="text"
//         placeholder="Please retype the code above"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         className="w-full p-2 mb-2 border rounded"
//       />
//       {message && (
//         <p
//           className={`text-center text-sm mb-2 ${
//             isVerified ? 'text-green-500' : 'text-red-500'
//           }`}
//         >
//           {message}
//         </p>
//       )}
//       <button
//         onClick={validateCaptcha}
//         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//       >
//         Verify
//       </button>
//     </div>
//   );
// };

// export default ReactCaptcha;
