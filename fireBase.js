
     
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
         var slug;
//set the business items in register and login page and store the business name
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const db = getDatabase()
            
        // verify the business link
        var userDetails,productDetails
    var businessHostName = window.location.hostname
    export async function getData() {
        var userBucket =  await get(ref(db,"businessUsers/" + slug))
        if(userBucket.exists()){
            
            var productBucket = await get(ref(db,"products/" + slug))
            
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
        window.location.href = "../noUser.html"
    }
      
export async function addProduct(businessName, data) {
     var name = await cleanText(businessName)
    await push(ref(db, "products/" + name), data);
    return name + " Successfull";
}

export function add(){
    return businessPathName
}

export async function root() {
     slug =  new URLSearchParams(location.search).get("slug")
     slug = await cleanText(slug)
      localStorage.setItem("businessSlug", slug);
        var userBucket =  await get(ref(db,"businessUsers/" + slug))
        if(userBucket.exists()){
            
            var productBucket = await get(ref(db,"products/" + slug))
            console.log(slug)
            //load page with the data
            return{
                userDetails : userBucket.val(),
                productDetails : productBucket.val()
            }
            
           //loadPage(userBucket.val(),productBucket.val())
        }
        window.location.href = "../noUser.html"
}


export async function verifyLogin(name, password){
    
     var userBucket =  await get(ref(db,"businessUsers/" + name))
        if(userBucket.exists()){
            var userInfor = userBucket.val();
                if(userInfor.password == password){
                     localStorage.setItem("logIn","true")
                    window.location.href = "dashboard.html"
                }
                return "Incorrect Password"
           //loadPage(userBucket.val(),productBucket.val())
        }
        return "This user don't Exist on our database"
}
export function nameSlug(){
  var slug =   localStorage.getItem("businessSlug");
     var data = slug
    return data
}


function cleanText(text) {
  var textCleaned = text.replace(/[^a-zA-Z0-9]/g, "");
     return textCleaned.toLowerCase()
}

export async  function updatePayment(data){
     alert(data)
     var buckect = localStorage.getItem("businessSlug")
            try {
                await update(ref(db,"businessUsers/" + slug),{
                    plan: data.plan,
                    paymentDate: data.paymentDate ,
                    expiringDate: data.expireDate
                })
                return "Successful"
            } catch (error) {
                return error
            }
              
        }
export async function fetchData(){
      var buckect = localStorage.getItem("businessSlug")
     try{
         var client = await get(ref(db,"businessUsers/" + buckect)) 
          var val = client.val()
          return val
     }catch(error){
          
     }
     
}












































