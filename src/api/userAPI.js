import { http } from "../configurations/AxiosCFG";
import { getDataFromStorage } from "../tools/StorageTool";

export const Register = async (name, username, password, reEnter) => {
    try {
        const response = await http.post("/register/", {
            name: name,
            username: username,
            password: password,
            password_confirmation: reEnter
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const Login = async (username,password) => {
    try {
        const response = await http.post("/login/", {
            username: username,
            password: password
        });
        return response;
    }
    catch (error) {
        return error;
    }
}

export const getName = async () => {
    try {
        const token = await getDataFromStorage('access_token');
        const response = await http.get("/name/", {
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