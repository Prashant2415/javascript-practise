const personDetails=[
    {
        id: 1,
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Prashant Mendhe",
        title: "Senior Software Engineer",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Sonu Mendhe",
        title: "Senior Software Engineer",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Sunita Mendhe",
        title: "Senior Software Engineer",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Jenny Mendhe",
        title: "Senior Software Engineer",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
]

const image = document.querySelector(".profile");
const profile = document.querySelector(".name");
const designation = document.querySelector(".designation");
const description = document.querySelector(".description");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

var currentItem = 0;
 window.addEventListener("DOMContentLoaded",()=>{
    showProfile();
 })

 function showProfile(){
    const item = personDetails[currentItem];
    image.src = item.img;
    profile.textContent = item.name;
    designation.textContent = item.title;
    description.textContent = item.description;
 }

 previous.addEventListener("click",()=>{
    currentItem--;
    if(currentItem < 0)
    {
        currentItem = personDetails.length - 1; 
    }
    showProfile();
 })
 
 next.addEventListener("click",()=>{
    currentItem++;
    if(currentItem > personDetails.length - 1)
    {
        currentItem = 0;
    }
    showProfile();
 })