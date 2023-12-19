// import MerchantService from "../../services/MerchantService";

// export function getMerchantListAction(status) {
//     return new Promise((resolve, rejact) => {
//         MerchantService.getMerchantList(status)
//             .then((res) => {
//                 resolve(res)
//             }).catch((error) => {
//                 console.log("Error getting form getMerchantListAction", error)
//                 rejact(error)
//             })
//     })
// }
// export function getMerchantByMerchantIdAction(merchantId) {
//     return new Promise((resolve, rejact) => {
//         MerchantService.getMerchantByMerchantId(merchantId)
//             .then((res) => {
//                 resolve(res)
//             }).catch((error) => {
//                 console.log("Error getting form getMerchantByMerchantIdAction", error)
//                 rejact(error)
//             })
//     })
// }
// export function updateMerchantStatusAction(merchantId, status, reason) {
//     return new Promise((resolve, rejact) => {
//         MerchantService.updateMerchantStatus(merchantId, status, reason)
//             .then((res) => {
//                 resolve(res)
//             }).catch((error) => {
//                 console.log("Error getting form updateMerchantStatusAction", error)
//                 rejact(error)
//             })
//     })
// }