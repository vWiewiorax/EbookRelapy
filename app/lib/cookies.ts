import Cookies from "js-cookie"
export const saveUserCookie = (accepted: "true" | "false") => {
    Cookies.set("cookieAccepted", accepted, {
      expires: 90,
      secure: true,
      sameSite: "lax",
    })
  }
  
 
 export const getUserCookie = (): boolean | null => {
   const raw = Cookies.get("cookieAccepted")
   if (!raw) return null
    return raw=="true"?true : raw=="false"?false:null
 }
 
 export const clearUserCookie = () => {
   Cookies.remove("cookieAccepted")
 }