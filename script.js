const form = document.querySelector("#main-form")
const maskForm = document.querySelector(".mask-form")

function clicked() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    maskForm.style.visibility = "visible"
} 

function returnForm() {
    form.style.left = "-306%"
    form.style.transform = "translateX(0)"
    maskForm.style.visibility = "hidden"
}
