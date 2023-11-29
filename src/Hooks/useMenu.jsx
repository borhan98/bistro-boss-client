import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios();

    useEffect(() => {
        axiosInstance.get("/menu")
        .then(res => {
            setMenu(res.data);
            setLoading(false);
        })
    }, [axiosInstance])

    return [menu, loading];
};

export default useMenu;