# Lógica del controlador de eventos

Recibimos un evento del bot (Comandos,Eventos)

## Control de eventos animaciones

### Cuando recibimos un evento / comando

Comprobamos la cola, revisamos las prioridades de los eventos de la cola
pasar el evento de mayor prioridad o el primero en entrar.

Comprobamos si ese evento pasado es igual al actual.

Si el ultimo evento recibido, es exactamente igual al actual, acumulamos el evento.

### Cuando se libera el front

Comprobamos si hay algo en la cola y si lo hay
Lanzamos el evento de la cola a socket-io y este al front.
