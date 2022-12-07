import { subscribeTo } from "./suscriptions"

export const initListeners = (socket) => dispatch => {
  subscribeTo.drawPhaseEnd()
  subscribeTo.drawPhaseStart()
  subscribeTo.compilePhaseStart()
  subscribeTo.compilePhaseEnd()
  subscribeTo.loadPhaseStart()
  subscribeTo.loadPhaseEnd()
}
