import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useProfile = () => {
    const navigate = useNavigate();

    const userProfile = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/data/profile`,{
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            const errorMessage = error.response.message || error.response.data.message || "Something went wrong";
            // if (errorMessage == "Authientication Failed Please Login Again") {
            //     navigate('/login', { replace: true });
            //     return;
            // }
            console.error(errorMessage);
        }
    };
    return { userProfile };
};

export default useProfile;
// const response = await axios.get('http://localhost:5000/api/data/profile');