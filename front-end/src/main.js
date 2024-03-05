// TODO #import-router: use ES named imports to import the router
import { Router } from "./app/scripts/router";
import { WelcomeComponent } from "./app/scripts/welcome";
import { GameComponent } from "./app/scripts/game";
import { ScoreComponent } from "./app/scripts/score";
// TODO #import-components: use ES named imports to import WelcomeComponent, GameComponent a ScoreComponent
// TODO #import-css: use ES side-effect imports to import styles/style.css


import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.css";

const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet);
router
  .register("", {
    component: WelcomeComponent,
    templateUrl: "/src/app/views/welcome.html",
    // TODO #import-html: remove the templateUrl property.
  })
  .register("welcome", {
    component: WelcomeComponent,
    templateUrl: "/src/app/views/welcome.html",
    // TODO #import-html: remove the templateUrl property.
  })
  .register("game", {
    component: GameComponent,
    // TODO #import-html: remove the templateUrl property.
  })
  .register("score", {
    component: ScoreComponent,
    templateUrl: "/src/app/views/score.html",
    // TODO #import-html: remove the templateUrl property.
  });
