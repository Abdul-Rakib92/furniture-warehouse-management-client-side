// import React from "react";
// import { useParams } from "react-router-dom";
// import useInventoryDetail from "../../hooks/useInventoryDetail";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Select = () => {
//   const { inventoryItemId } = useParams();
//   const [inventoryItem] = useInventoryDetail(inventoryItemId);
//   const [user] = useAuthState(auth);

//   const handleMyItem = (event) => {
//     event.preventDefault();
//     const MyItem = {
//       email: user.email,
//       inventoryItem: inventoryItem.name,
//       inventoryItemId: inventoryItemId,
//       address: event.target.address.value,
//       phone: event.target.phone.value,
//     };
//     axios.post("http://localhost:5000/MyItem", MyItem).then((response) => {
//       console.log(response);
//       const { data } = response;
//       if (data.insertedId) {
//         toast("Your Item Is selected");
//         event.target.reset();
//       }
//     });
//   };

//   return (
//     <div className="w-50 mx-auto">
//       <h2>Selected: {inventoryItem.name}</h2>
//       <form onSubmit={handleMyItem}>
//         <input
//           className="mb-3 border border-success rounded-pill w-100 p-2"
//           type="text"
//           value={user?.displayName}
//           name="name"
//           placeholder="name"
//           required
//           readOnly
//           disabled
//         />
//         <br />
//         <input
//           className="mb-3 border border-success rounded-pill w-100 p-2"
//           type="email"
//           value={user?.email}
//           name="email"
//           placeholder="email"
//           required
//           readOnly
//           disabled
//         />
//         <br />
//         <input
//           className="mb-3 border border-success rounded-pill w-100 p-2"
//           type="text"
//           value={inventoryItem.name}
//           name="inventoryItem"
//           placeholder="Inventory Item"
//           required
//           readOnly
//           disabled
//         />
//         <br />
//         <input
//           className="mb-3 border border-success rounded-pill w-100 p-2"
//           type="text"
//           name="address"
//           placeholder="address"
//           autoComplete="off"
//         />
//         <br />
//         <input
//           className="mb-3 border border-success rounded-pill w-50 p-2"
//           type="text"
//           name="phone"
//           placeholder="phone"
//         />
//         <br />
//         <input
//           className="btn btn-primary mb-5"
//           type="submit"
//           value="Place Select"
//         />
//       </form>
//     </div>
//   );
// };

// export default Select;








// -------------------------


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

// const MyItem = () => {
//     const [user] = useAuthState(auth)
//     const [myItems, setMyItems] = useState([]);

//     useEffect( () => {

//         const getMyItems = async() =>{
//             const email = user.email;
//             const url = `http://localhost:5000/myItem?email=${email}`;
//             const {data} = await axios.get(url);
//             setMyItems(data);
//         }
//         getMyItems();

//     }, [user])

//     return (
//         <div>
//             <h2>Selected Items: {myItems.length}</h2>
//         </div>
//     );
// };

// export default MyItem;
