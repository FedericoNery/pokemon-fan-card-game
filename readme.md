# Pokemon Card Game

## Iniciar Communication

~~~
cd communication
npm i
npm start
~~~

## Iniciar Backend
* Primero hacemos el seed de la base de datos
* Luego iniciamos el backend
~~~
docker pull mongo
cd backend
npm run seed
npm start
~~~
## Iniciar Frontend
~~~
cd frontend
yarn install
yarn start
~~~

### URL Frontend: localhost:3000
### URL Backend: localhost:5000
### URL Communication: localhost:8000


### Jugar
* En dos navegadores distintos, loguearse con dos usuarios distintos.
* En uno creamos el room
* En el otro haremos join del room
* Primero se deberá seleccionar las cartas que desea invocar en base a la cantidad de energía que tenga por cada carta y su respectivo color
* Luego deberá hacer lo mismo en el otro cliente
* Por último el sistema determinará si la defensa de alguno de los jugadores es mayor a la del rival, ganará la ronda. Si ambos terminan con cero, se le dará la ronda ganada
al primer jugador.
* El combate es al mejor de 3
