/// HACER PAGES CON CUSTOM ELEMENTS PPORQUE VOY A UTILIZAR DE ROUTER VAADIN
import {state} from "../state"
class NuevaSala extends HTMLElement{
  
  connectedCallback(){
    this.render()
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
    .input{
      border-radius: 10px;
      font-family: 'Source Code Pro', monospace;
      height: 45px;
      width: 353px;
      font-size: 17px;
    }

    
    `
    this.appendChild(style)

  }
  addListeners(){
    const cs = state.getState()

    const  form = this.querySelector(".container-buttons")
    form.addEventListener("submit",(e)=>{

      e.preventDefault()

      const target = e.target as any
      state.pushNameUser1ToState(target.nombre.value)
      state.setState(cs)
    })


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

       <form class="container-buttons">

          <input  class="input"type="text" name="nombre" placeholder=" Ingrese su nombre..."/>
          <button-comp>Empezar</button-comp>
       </form>
       <div class="container-hands">
           <hands-el jugada="piedra"></hands-el>
           <hands-el jugada="papel"></hands-el>
           <hands-el jugada="tijera"></hands-el>
       </div>
    </div>
    
    `;
    this.appendChild(div)

    this.addListeners()


  }
  
  
}
customElements.define("nueva-sala",NuevaSala)