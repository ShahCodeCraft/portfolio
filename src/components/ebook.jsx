// import { useState } from "react";
// import Navbar from "./Navbar";
// import { TbGridDots } from "react-icons/tb";
// import MobNav from "./pages/MobNav";


// const ebooks = [
//   { id: 1, title: "Mastering React", price: 19.99, image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/130972034/original/b324e3dcbad0b3ae0920aaddd483fa5d45e93d6b/create-hd-ebook-covers-for-any-digital-book-platform.png" },
//   { id: 2, title: "Tailwind CSS Guide", price: 14.99, image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_grid/v1/attachments/project_item/attachment/17f37230c7685f83178cbcf08a909c4d-1682500886283/Seller%20to%20Stellar%20V3.jpg" },
//   { id: 3, title: "JavaScript Essentials", price: 12.99, image: "https://cdn.venngage.com/template/thumbnail/small/39198110-3724-4046-972c-b4e4088926d9.webp" },
// ];

// export default function EbookStore({ show, setShow }) {
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [address, setAddress] = useState("");
//   const [orders, setOrders] = useState([]);

//   const handleOrder = (book) => {
//     setSelectedBook(book);
//   };

//   const handlePayment = () => {
//     if (address) {
//       setOrders([...orders, { ...selectedBook, address }]);
//       setSelectedBook(null);
//       setAddress("");
//     }
//   };

//   return (
//     <div className="page homePage w-full h-full">
//     <Navbar show={show} />
//     <MobNav show={show} />
//     <TbGridDots onClick={() => setShow(!show)} className=" hamburger hamburger2" />
//     <div className="p-6 max-w-full mx-auto" style={{ backgroundImage: "url('./src/assets/grace.jpg')" }}>
    
  
//       <h2 className="text-5xl text-white shadow-lg shadow-black font-bold mb-6 text-center">Ebook Store</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {ebooks.map((book) => (
//           <div key={book.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
//             <img src={book.image} alt={book.title} className="w-full h-96 sm:h-5/6" />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
//               <p className="text-gray-600 mb-4">${book.price}</p>
//               <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={() => handleOrder(book)}>
//                 Order Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedBook && (
//         <div className="mt-6 p-6 bg-gray-100 border rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold">Enter Address</h3>
//           <input 
//             type="text" 
//             placeholder="Your Address" 
//             className="mt-2 p-3 w-full border rounded-lg" 
//             value={address} 
//             onChange={(e) => setAddress(e.target.value)} 
//           />
//           <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600" onClick={handlePayment}>
//             Proceed to Payment
//           </button>
//         </div>
//       )}

//       {orders.length > 0 && (
//         <div className="mt-6 p-6 bg-white border rounded-lg shadow-md">
//           <h3 className="text-xl font-semibold mb-4">My Orders</h3>
//           {orders.map((order, index) => (
//             <div key={index} className="p-3 border-b">
//               <p className="font-medium">{order.title} - ${order.price}</p>
//               <p className="text-sm text-gray-600">Delivered to: {order.address}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }



import { useState } from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import MobNav from "./pages/MobNav";

const ebooks = [
  { id: 1, title: "मुसलमानों की बिखरी पहचान, खोया वजूद – जिम्मेदार कौन? Order Now", price: 99, image: "/ebook1.png" },
  { id: 2, title: "मुसलमानों की बिखरी पहचान, खोया वजूद – जिम्मेदार कौन? Order Now", price: 59, image: "/ebook1.png" },
  { id: 3, title: "मुसलमानों की बिखरी पहचान, खोया वजूद – जिम्मेदार कौन? Order Now", price: 49, image: "/ebook1.png" },
];

export default function EbookStore({ show, setShow }) {
  const handleOrderW = (book) => {
    const whatsappMessage = `Hello, I would like to order the ebook: ${book.title} priced at $${book.price}.`;
    const whatsappLink = `https://wa.me/qr/BQ4PMXZQZ6AQP1`;
    window.location.href = whatsappLink;
  };

  const handleOrderT= (book) => {
  const telegramLink = `https://web.telegram.org`;
  window.location.href = telegramLink;
};
  return (
    <div className="page homePage w-full h-full">
      <Navbar show={show} />
      <MobNav show={show} />
      <TbGridDots onClick={() => setShow(!show)} className="hamburger hamburger2" />
      <div className="p-6 max-w-full mx-auto" style={{ backgroundImage: "url('/grace.jpg')" }}>
        <h2 className="text-5xl text-white shadow-lg shadow-black font-bold mb-6 text-center">Ebook Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((book) => (
            <div key={book.id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <img src={book.image} alt={book.title} className="w-full h-96 sm:h-4/6" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-black">{book.title} <strike>₹299</strike></h3>
                <p className="text-gray-600 mb-4">Best Price - ₹{book.price} 👇</p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={() => handleOrderW(book)}>
                  Whatshapp
                </button>
                <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" onClick={() => handleOrderT(book)}>
                  Telegram
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}