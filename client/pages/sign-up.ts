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

    .container-buttons{
      display: grid;
      gap: 16px;
      margin: 0 auto;
      margin-top: 11vh;
      width:55vh;
    }




    `
    this.appendChild(style)
  }
  render(){

    const div = document.createElement("div")
    div.innerHTML=`
    
    <div class="container-page">
      <div class="container-title" 
          <h2 class="title-page" >Ingresa tu nombre para registrarte</h2>
      </div>

     <form class="container-buttons">
        <input  class="input"type="text" name="nombre" placeholder=" Ingrese nombre..."/>
         <button-comp>Registrarme</button-comp>
     </form>
    </div>
    
    `
    this.appendChild(div)
  }
}
customElements.define("sign-up", Registro)