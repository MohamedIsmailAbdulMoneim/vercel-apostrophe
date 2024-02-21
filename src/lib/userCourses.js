'use server'

import { getData } from "@/db/queries";


const getUserData = async (username) => {
    
    const data = await getData(username)
    return data
}

export { getUserData }