
import { http } from "../configurations/AxiosCFG";
import { getDataFromStorage } from "../tools/StorageTool";

export const getAllProfiles = async () => {
    try {
        const token = await getDataFromStorage('access_token');
        const response = await http.get("/profile/all", {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const getProfile = async (id) => {
    try {
        const response = await http.get(`/profile/list/${id}`);
        return response;
    } catch (error) {
        return error;
    }
}

export const createProfile = async () => {
    try {
        const token = await getDataFromStorage('access_token');
        const response = await http.post("/profile/create_profile/", {
            "name": "Nhập tên",
            "slogan": "Nhập Slogan",
            "img": "default.jpg",
            "contact": [

            ]
        }, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const deleteProfile = async (id) => {
    try {
        const token = await getDataFromStorage('access_token');
        const response = await http.delete(`/profile/delete/${id}/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response;
    }
    catch (error) {
        return error;
    }
}

export const editProfile = async (id, name, slogan, img, contact) => {
    try {
        const token = await getDataFromStorage('access_token');
        const response = await http.put(`/profile/edit/${id}`, {
            "name": name,
            "slogan": slogan,
            "img": img,
            "contact": contact
        }, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        console.log(response.status);
        return response;
    }
    catch (error) {
        console.log(error);
        return error;

    }
}