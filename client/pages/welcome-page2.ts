/// HACER PAGES CON CUSTOM ELEMENTS PPORQUE VOY A UTILIZAR DE ROUTER VAADIN

import { Router } from "@vaadin/router"



class WelcomePage2 extends HTMLElement{
  
  connectedCallback(){
    this.render()
    const button = this.querySelector(".nuevo-juego")
    button.addEventListener("click",()=>{
      Router.go("nueva-room")
    })
    const buttonSalaExist =  this.querySelector(".sala-existente")
    buttonSalaExist.addEventListener("click",()=>{
      Router.go("room-exist")
    })




    const style = document.createElement("style")
    style.innerHTML= `
    .container-title{
      display: flex;
      font-size: 65px;
      justify-content: center;
      width: 31vh;
      margin: 0 auto;
      color: green;
      font-family: 'Source Code Pro', monospace;
      
    }
   
    .container-buttons{
    display: grid;
    margin: 0 auto;
    justify-content: center;
    gap: 18px;
    padding: 40px 0;
    }
    .container-hands{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      max-width: 440px;
      margin: 0 auto;
      padding: 40px 0;
    }

    
    `
    this.appendChild(style)

  }
  render(){  
    const div = document.createElement("div")

    div.innerHTML = `
    
    <div>
       <div class="container-title" 
           <h1 class="title-page" >Piedra, 
           Papel o 
           Tijera</h1>
       </div>

       <div class="container-buttons">
          <button-comp class="nuevo-juego">Nuevo Juego</button-comp>
          <button-comp class="sala-existente">Ingresar a una sala</button-comp>
       </div>
       <div class="container-hands">
           <hands-el jugada="piedra"></hands-el>
           <hands-el jugada="papel"></hands-el>
           <hands-el jugada="tijera"></hands-el>
       </div>
    </div>
    
    `;
    this.appendChild(div)


  }
  
  
}
customElements.define("welcome-page2",WelcomePage2)