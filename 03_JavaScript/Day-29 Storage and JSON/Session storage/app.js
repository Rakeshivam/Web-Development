const jsData = JSON.parse( sessionStorage.getItem("userInfo"))
console.log("jsData:",jsData);



sessionStorage.removeItem("userInfo");
sessionStorage.removeItem("userInfo1");

// sessionStorage.clear()
