navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then((stream)=>{
console.log(stream)
let video = document.getElementsById("video")
video.srcObject = stream
video.onloadedmetadata = (ev) => video.play ()
}).catch((err)=>console.log(err))