const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeimg = document.querySelector("#qr-code img")


//EVENTOS

function generateQrCode(){
const qrCodeInputValue = qrCodeInput.value
if(!qrCodeInputValue)return

qrCodeBtn.innerText = "Gerando código..."
qrCodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
qrCodeimg.addEventListener("load",() =>{
    container.classList.add("active")
    qrCodeBtn.innerText = "Codigo criado!"

    
})
}

qrCodeBtn.addEventListener("click", () =>{
generateQrCode()

})
qrCodeInput.addEventListener("keydown", (e) =>{
    if(e.code === "Enter"){
        generateQrCode()
    }
    })
//limpar area do qrCode
qrCodeInput.addEventListener("keyup",()=>{
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})