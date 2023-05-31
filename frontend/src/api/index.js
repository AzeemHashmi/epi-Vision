//http://localhost:8000/auth/users/



import axios from 'axios'


const API = axios.create({baseURL:'http://localhost:8000'})

// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('qa_profile')){
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('qa_profile')).access_token}`;
//     }

//     return req;
// })


// Auth APIs
export const signUp = (formData) =>API.post('/auth/users/', formData)
