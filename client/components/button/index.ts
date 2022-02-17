class ButtonComp extends HTMLElement{
 
  constructor(){
    super()
    this.render()
    
  }
  connectedCallback(){
    const style= document.createElement("style")
    style.innerHTML= `
    .button-elem{

      font-family:"Odibee Sans", cursive;
      background-color: #102626;
      height: 84px;
      width: 364px;
      font-size: 45px;
      border:solid 6px #00fff9;
      color: silver;
      border-radius: 6px;
    } 
    `
    this.appendChild(style)
    
    
  }
  render(){
   this.innerHTML = `
   <button class="button-elem">${this.textContent}</button>
   `
    
  }
}
customElements.define("button-comp", ButtonComp)