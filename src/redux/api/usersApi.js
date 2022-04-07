import { useState } from "react";

import axios from "axios";


const [currentPage,setCurrentPage] = useState(1);

export const getAllUsers = async () => {

    
    try {
        const users = await axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`);
        return users.data.results;
    }
    catch(err) {
        console.error(err);
    }
};

export  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
};