import { Router} from "@vaadin/router";

const root = document.querySelector(".root")

const router = new Router(root)

router.setRoutes([

  {path:"/",component:"welcome-page"},
  {path:"/home",component:"welcome-page2"},
  {path:"/nueva-room",component:"nueva-sala"},
  {path:"/room-exist",component:"sala-existente"},
  {path:"/registro",component:"sign-up"},
])