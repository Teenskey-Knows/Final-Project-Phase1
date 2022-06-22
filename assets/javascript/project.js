const url = 'https://www.poemist.com/api/v1/randompoems'
function loadMyApi(){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        const myData = "";
        data.map((elements)=>{
            myData = ` <div class="grid-main-container">
            <div class="content-container">
              <div class="poem-content boxing">
                <h2 class="now-the-poem-content">The Poem Title</h2>
                <p class="poem-content-wise">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                  qui exercitationem harum dolorem magnam recusandae expedita
                  <br />ducimus consectetur consequatur! Praesentium<br />
                  perspiciatis unde magni veritatis ea necessitatibus impedit sint<br />
                  hic harum ipsa, doloribus fuga earum fugit <br />accusamus ducimus
                  mollitia, <br />sapiente voluptate facilis laudantium optio
                  <br />quo nostrum, vitae reiciendis eligendi!<br />
                  Voluptatem amet veritatis dignissimos deleniti dolores inventore
                  culpa, accusantium non tempora porro architecto placeat
                  cupiditate<br />
                  optio dolorum<br />
                  unde, adipisci velit? Quisquam quos <br />autem perspiciatis sunt
                  consequuntur aspernatur ullam <br />id nam labore, nihil fugiat modi
                  maiores, alias voluptatum <br />totam doloribus commodi, odio
                  deserunt dolor rerum officiis! Quod reprehenderit <br />nihil nisi
                  maiores suscipit sit.
                </p>
                <br>
      
                <a target="blank" href="#">Click to view the poem's source</a>
              </div>
              <div class="author-details boxing">
                <h2 class="author-name">The Author: ShakeSpare</h2>
                <br />
                <button class="more-about-author button boxing">
                  Tap to See Author Details
                </button>
              </div>
      
              <div class="hidden-content boxing more-details-on-author">
                <img
                  src="https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg"
                  alt=""
                  class="image-name"
                  width="400"
                  height="400px"
                />
                <h2 class="author-name">ShakeSpare</h2>
                <a href="#" target="blank" class="author-website">Authors website</a>
              </div>
            </div>
          </div>
      `
        }
    )
    .catch((error)=>console.log(error));

}


function initialize(){
    loadMyApi()
}
initialize()




// initialize()

//GETTING DOM CONTENTS TO MANIPULATE
// const button1 = document.getElementsByClassName('more-about-author')
// const hiddenContent = document.getElementsByClassName('hidden-content')
// console.log(button1)


// function revealContent(){
//     if (hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn')
//     }else {
//         hiddenContent.classList.add('reveal-btn')
//     }
// }




