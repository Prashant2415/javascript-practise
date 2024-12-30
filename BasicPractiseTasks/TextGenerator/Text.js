const data = [
    {
        id: 1,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
        id: 3,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 4,
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    }
];

const button = document.querySelector(".generate");
const text = document.querySelector(".text");

var currentItem = 0;
window.addEventListener("DOMContentLoaded",()=>{
    showText();
})

function showText(){
    const item = data[currentItem];
    text.textContent = item.text;
}
button.addEventListener("click",()=>{
    console.log("inside")
    var randomNum = Math.floor((Math.random() * data.length));
    console.log(randomNum)
    currentItem = randomNum;
    showText();
})