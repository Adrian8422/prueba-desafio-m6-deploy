

const state = {

  data:{
    currentGame:{
      user1move:"",
      user2move:""
    },
      registerMessage:"",
      NameUser1:"",
      NameUser2:"",
      IdUser1:"",
      idUser2:"",
      userOnline1:false,
      userOnline2:false,
      startUser1:"",
      startUser2:"",
      roomId:"",
      rtdbRoomId:"",
      dataRtdb:{}
    ,
    history:{
      user1:0,
      user2:0

    }
  },
  listeners:[],

    getState(){
    const game =this.data
    return game

    },
    pushNameUser1ToState(nombre){
      const currentState = this.getState().currentGame
      currentState.NameUser1 = nombre
      this.setState(currentState)
    },
    pushNameUser2ToState(nombre){
      const currentState = this.getState().currentGame
      currentState.NameUser2 = nombre
      this.setState(currentState)
    },

    setState(newState){
      this.data= newState
      for (const cb of this.listeners) {
        cb()
      }
      console.log("el state cambio a", this.data)
    },
    subscribe(callback:(any:any)=>any){
      state.listeners.push(callback)


    }


}

export {state}