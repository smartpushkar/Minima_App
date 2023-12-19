import  secureLocalStorage  from  "react-secure-storage";

// export const setItem = async (key, value) => {
//     try {
//       await secureLocalStorage.setItem(key, value)
//     } catch (e) {
//       console.log("Error in setItem", e)
//     }
//   }

//   export const getItem = async (key) => {
//     // return new Promise((resolve, reject)=>{
//     //     secureLocalStorage.getItem(key).then(data =>{
//     //        resolve(data)
//     //     }).catch((error => {
//     //         reject(error)
//     //     }))
//     // })
    
//     return await secureLocalStorage.getItem(key).then(data =>{});
  //}

class LocalStorageUtils{
    setItem = async(key, value) => {
        try {
            await secureLocalStorage.setItem(key, value)
            } catch (e) {
                console.log("Error in setItem", e)
            }
    }

    getItem = (key) => {
        return secureLocalStorage.getItem(key);
    }

    removeItem = (key) => {
        return secureLocalStorage.removeItem(key)
    }

    setObject = async(key, value) => {
        try {
            await secureLocalStorage.setItem(key, JSON.stringify(value))
            } catch (e) {
                console.log("Error in setItem", e)
            }
    }

    getObject = (key) => {
        return JSON.parse(secureLocalStorage.getItem(key));
    }

    removeObject = (key) => {
        return secureLocalStorage.removeItem(key)
    }

    removeAll = () => {
        return secureLocalStorage.clear()
    }

}
// eslint-disable-next-line
export default new LocalStorageUtils()