function updateOnlineStatus() {
  let msg = document.getElementById("offline-message");
  if (!msg) {
    msg = document.createElement("div");
    msg.id = "offline-message";
    msg.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; background:red; color:white; text-align:center; padding:10px; font-weight:bold; z-index:9999;";
    msg.innerText = "🚫 No Internet Connection";
    document.body.appendChild(msg);
  }

  if (navigator.onLine) {
    msg.style.display = "none";
  } else {
    msg.style.display = "block";
  }
}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
window.addEventListener("load", updateOnlineStatus);
