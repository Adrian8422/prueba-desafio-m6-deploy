import { state } from "../state"
import {Router} from "@vaadin/router"

class Registro extends HTMLElement {
  connectedCallback(){
    this.render()
    const style = document.createElement("style")
    style.innerHTML=`
    .continer-page{
      display: flex;
      flex-direction: column;

    }
    .container-title{
      margin: 0 auto;
      display: flex;
      font-size: 28px;
      justify-content: center;
      width: 31vh;
      color: green;
      font-family: 'Source Code Pro', monospace;
      margin-top: 15vh;

    }

    .form-signup{
      display: grid;
      gap: 16px;
      margin: 0 auto;
      margin-top: 11vh;
      width:55vh;
    }
    .input{
      border-radius: 10px;
     font-family: 'Source Code Pro', monospace;
     height: 45px;
     width: 353px;
     font-size: 17px;
     }
     .text-completet-signup{
       display:none
     }




    `
    this.appendChild(style)
  }
  addListeners(){
    const cs = state.getState()

    const form= this.querySelector(".form-signup")
    console.log(form)
    form.addEventListener("submit",(e )=>{
      e.preventDefault()
      const target = e.target as any
      const name= target.nombre.value
      state.signUp(name)
     state.setState(cs)
    

      Router.go("home")
     
      
     
      
      
      
    })


  }
  render(){

    const div = document.createElement("div")
    div.innerHTML=`
    
    <div class="container-page">
      <div class="container-title" 
          <h2 class="title-page" >Ingresa tu nombre para registrarte</h2>
          <p class="text-completet-signup">${state.data.registerMessage}</p>
      </div>

     <form class="form-signup">
        <input  class="input"type="text" name="nombre" placeholder=" Ingrese nombre..."/>
         <button-comp>Registrarme</button-comp>
     </form>
    </div>
    
    `
    this.appendChild(div)
    this.addListeners()
  }
}
customElements.define("sign-up", Registro)