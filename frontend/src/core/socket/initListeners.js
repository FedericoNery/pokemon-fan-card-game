import { roomActions } from "../../redux/reducers/roomReducer"
import { subscribeTo } from "./suscriptions"

const {setRoomId, setPassword, setOptions, setError} = roomActions

export const initListeners = (socket) => dispatch => {
  subscribeTo.drawPhaseEnd()
  subscribeTo.drawPhaseStart()
  subscribeTo.compilePhaseStart()
  subscribeTo.compilePhaseEnd()
  subscribeTo.loadPhaseStart()
  subscribeTo.loadPhaseEnd()
  
    /* socket.on('[SUCCESS] Successfully initialised', ({ roomId, password, options }) => {
      console.log('[SUCCESS] Successfully initialised');
      dispatch(setRoomId(roomId))
      dispatch(setPassword(password))
      dispatch(setOptions(options)) 
    });
  
    socket.on('Error: Incorrect password!', () => dispatch => {
      console.log('Error: Incorrect password!');
      dispatch(setError(
        {
          title: 'INCORRECT PASSWORD',
          content: 'Sorry, incorrect password for the room. Try again'
        }
      ))
    });
  
    socket.on('Error: Create a room first!', () => dispatch => {
      console.log('Error: Create a room first!');
      dispatch(setError(
        {
          title: 'ROOM NOT FOUND',
          content: 'Sorry, requested Room does not exist. Create a New Room or enter the correct ROOM ID'
        }
      ));
    });
  
    socket.on('Error: Room already created. Join the room!', () => dispatch => {
      console.log('Error: Create a new room again or Join existing one!');
      dispatch(setError(
        {
          title: 'ROOM ALREADY PRESENT',
          content: 'Sorry, requested Room already present, Join the existing room or Create a new room again'
        }));
    }); */
  }