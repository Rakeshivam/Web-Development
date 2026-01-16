console.log("Welcome to APP JS File..");

const themePreference = localStorage.getItem("theme");

if(themePreference === "light")
{
    console.log("Light Mode Enabled");
    document.body.style.background="#fff";
    document.body.style.color="#000";
}
else{
    console.log("Dark Mode Enabled");
    document.body.style.background="#000";
    document.body.style.color="#fff";
}


localStorage.removeItem("deleteKey");
// localStorage.clear()


/**
 * ! Important Methods of Local Storage:- 
 * - localStorgae.setItem("key","value")
 * - localStorage.getItem("key")
 * - localStorage.removeItem("key")
 * - localStorage.clear()
 */


