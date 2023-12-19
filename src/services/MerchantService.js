// import axios from 'axios'
// import { Get_Merchant_By_Merchant_Id, Get_Merchant_List, Update_Merchant_Status } from '../config/APIUrls';

// class MerchantService {
//     getMerchantList = async (status) => {
//         const headers = {
//             'Content-Type': 'application/json',
//             "Authorization": `Bearer ${localStorage.getItem('webToken')}`
//         }
//         return await axios.get(`${Get_Merchant_List}?status=${status}`, {
//             headers: headers
//         });
//     }
//     getMerchantByMerchantId = async (merchantId) => {
//         const headers = {
//             'Content-Type': 'application/json',
//             "Authorization": `Bearer ${localStorage.getItem('webToken')}`
//         }
//         return await axios.get(`${Get_Merchant_By_Merchant_Id}?merchantId=${merchantId}`, {
//             headers: headers
//         });
//     }
//     updateMerchantStatus = async (merchantId, status, reason) => {
//         const headers = {
//             'Content-Type': 'application/json',
//             "Authorization": `Bearer ${localStorage.getItem('webToken')}`
//         }
//         return await axios.post(`${Update_Merchant_Status}?merchantId=${merchantId}&status=${status}&reason=${reason}`, null, {
//             headers: headers
//         });
//     }

    
// }
// const MerchantServiceInstance = new MerchantService();

// export default MerchantServiceInstance;