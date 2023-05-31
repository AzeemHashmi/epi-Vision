import * as api from "../api/index";

//Action Creators

export const signUp = async(formData,setFormData,setLoginToggle) =>  {

  try {
    // Sign in the user
    console.log(formData)

    const { data } = await api.signUp(formData);

    console.log(data)
    setFormData({})
    setLoginToggle(true)
    alert("User Registered Successfully")

    // dispatch({ type: "LOGIN", data });
   


  } catch (error) {
    alert("Something Went Wrong")
    
   console.log(error)
  }
};