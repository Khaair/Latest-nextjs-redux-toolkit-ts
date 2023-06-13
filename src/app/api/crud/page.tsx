import axios from "axios";

// fetch default shipping api call
export const fetchCrudDataHandler = async () => {
  const res = await axios.get("http://localhost:8080/api/show");
  return res;
};

// fetch default billing api call
export const fetchDefaultBillingAddressHandler = async () => {
  const unicodeUri = `${process.env.REACT_APP_READER_URL}`;
  const res = await axios.get(`${unicodeUri}/addresses/default-billing`);
  return res;
};

// // fetch all addresses list
// export const fetchAllAddressHandler = async () => {
//   const unicodeUri = `${process.env.REACT_APP_READER_URL}`;
//   const res = await axios.get(`${unicodeUri}/addresses/list?skipLimit=YES`, {
//     headers: {
//       Authorization: `Bearer ${token()}`,
//     },
//   });
//   return res;
// };

// //  update address api call
// export const updateShippingAddressHandler = async (receivedFields: object) => {
//   const res = await fetch(
//     `${process.env.REACT_APP_PRODUCTS}/addresses/update`,
//     {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${token()}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(receivedFields),
//     }
//   );
//   return await res;
// };
