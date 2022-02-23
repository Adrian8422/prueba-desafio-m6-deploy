
// ESTO DESPUES DE BASE API TENGO QUE PRIRIZARLE PRIMERO LA DE HEROKU OSEA NINGUNA URL 

const API_BASE_URL = "http://localhost:3003"
const state = {

  data:{
   
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
    currentGame:{
      user1move:"",
      user2move:""
    },
    history:{
      user1:0,
      user2:0

    },
  },
  listeners:[],

    getState(){
   return this.data

    },
    pushNameUser1ToState(NameUser1:string){
      const currentState = this.getState()
      currentState.NameUser1 = NameUser1
      this.setState(currentState)
    },
    pushNameUser2ToState(NameUser2:string){
      const currentState = this.getState()
      currentState.NameUser2 = NameUser2
      this.setState(currentState)
    },
    signUp(name:string){
      const cs = this.getState()
   
      fetch(API_BASE_URL + "/signup",{
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({ nombre:name})
      }).then((res)=>{
        return res.json()
      }).then((data)=>{
        cs.IdUser1 = data.id
        cs.registerMessage= data.message
        this.setState(cs)
      })
      
    },
    signIn(callback){
      const cs = this.getState()

      if( cs.NameUser1){
        fetch(API_BASE_URL + "/signin",{
          method: "post",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({nombre: cs.NameUser1})
        }).then((res)=>{
          return res.json()
        }).then((data)=>{
          cs.IdUser1 = data.id
          this.setState(cs)

          callback()
        })
      }else{
        console.error("no hay un name en state")
        callback(true)
      }


    },

    askNewRoom(callback){

      const cs = this.getState()
      if(cs.IdUser1){
        fetch(API_BASE_URL + "/rooms", {
          method:"post",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({userId:cs.idUser1})
        }).then((res)=>{
          return res.json()
        }).then((data)=>{
          console.log("data del asknew", data)
          cs.roomId = data.id
          this.setState(cs)
          if(callback){
            callback()
          }
        })
      }else{
        console.error("No hay idUser1 en el state")
      }

    },

    accessToRoom(incompleteRoomId,callback?){
      const cs = this.getState()
      const userId = cs.idUser1
      const roomId = incompleteRoomId.toString()

      if(cs.roomId && cs.idUser1){
        fetch(API_BASE_URL + "/rooms/"+roomId+"?userId"+userId).then((res)=>{
          return res.json()
        }).then((data)=>{
          cs.rtdbRoomId = data.rtdbRoomId
          this.setState(cs)
          if(callback){
            callback()
          }
        })
      }else{
        console.error("error al acceso")
      }



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



// MODIFICAR LA PAGE NEW SALA PARA QUE PUEDA CREAR SALA .VER COMO ACOMODAR EL ASKNEWROOM PARA QUE FUNCIONE BIEN, TENGO QUE SETEAR EN LA RTDB LAS SECCIONES ASI PUEDO MANIPULAR LA INFO QUE VIAJA A LA REALTIME SETEAR ESTADOS DE PARTIDA SI ESTA ONLINE U OFFLINE Y ESO