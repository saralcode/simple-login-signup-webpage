import firebase_app from "@/lib/firebase/init";
import SmallTitle from "@/lib/pagecomponents/custom/smalltitle";
import { getAuth } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
function Logout(){
    const router= useRouter()
    useEffect( ()=>{
        getAuth(firebase_app).signOut().then(()=>{
            Cookies.remove("token");
            router.replace("/login");
        });
    },[])
    return <div>
        <SmallTitle>Wait We're loging you out...</SmallTitle>
    </div>
}

export default Logout;