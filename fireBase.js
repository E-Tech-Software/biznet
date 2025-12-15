
     
       // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
            import{getDatabase, ref,set,child,remove,update,get,push} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries

            // Your web app's Firebase configuration
            const firebaseConfig = {
                apiKey: "AIzaSyAevQ-rRmgvgh4Uz3oaEnkkqMuRV-i1M14",
                authDomain: "business-a33a0.firebaseapp.com",
                databaseURL: "https://business-a33a0-default-rtdb.firebaseio.com",
                projectId: "business-a33a0",
                storageBucket: "business-a33a0.firebasestorage.app",
                messagingSenderId: "408074741884",
                appId: "1:408074741884:web:ae1757e5bbe8eeb26941f9"
            };
//set the business items in register and login page and store the business name
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const db = getDatabase()
            
        // verify the business link
        var userDetails,productDetails
 
   let businessPathName = window.location.pathname.split("/").pop();
        localStorage.setItem("path",businessPathName);
    var businessHostName = window.location.hostname
    export async function getData() {
        var userBucket =  await get(ref(db,"businessUsers/" + businessPathName))
        if(userBucket.exists()){
            
            var productBucket = await get(ref(db,"products/" + businessPathName))
            
            //load page with the data
            return{
                userDetails : userBucket.val(),
                productDetails : productBucket.val()
            }
            
            var logInBtn = document.querySelector("#loginBtn").addEventListener("click",()=>{
                localStorage.setItem("pathFinder",businessPathName);
                window.location.href = "login.html"
            })
           //loadPage(userBucket.val(),productBucket.val())
        }
        alert("This user is not registered")
    }

export async function addProduct(businessName, data) {
    await push(ref(db, "products/" + businessName), data);
    return "Successfull";
}

export function add(){
    return businessPathName
}

export async function root() {
    businessPathName = localStorage.getItem("path")
     console.log(businessPathName)
        var userBucket =  await get(ref(db,"businessUsers/" + "Mavi"))
        if(userBucket.exists()){
            
            var productBucket = await get(ref(db,"products/" + "Mavi"))
            
            //load page with the data
            return{
                userDetails : userBucket.val(),
                productDetails : productBucket.val()
            }
            
           //loadPage(userBucket.val(),productBucket.val())
        }
        alert("This user is not registered")
}







