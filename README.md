# Altasbot

Un bot para Twitch, pensado para trabajar un backend junto a programación orientada a objetos.

## Estructura

index.js -> Este es el punto de partida que llama a todas las partes del bot

### 📁 src

Dentro de la carpeta src tenemos las partes que forman parte del bot.

* Altasbot -> Aquí se encuentra la librería TMI-js encargada de llamar a la api de Twitch.
* socketServer -> Aquí se encuentra un servidor de express que alberga socket-io.
* Client -> Un cliente de pruebas para socketServer.

## Roadmap

El proyecto esta enfocado para consumir la API de Twitch, de esta manera obtener datos del canal a escuchar.
Puntos a tener en cuenta:

1. Directo
    * Obtener el título del directo, categoría, y fecha del inicio.
    * Obtener la fecha de finalización del directo.
    * Establecer y desactivar modo emoticonos
    * Establecer y desactivar modo sólo seguidores

2. Chat
    * Tiene que recabar información de los mensajes, como el usuario que ha escrito y su contenido.
    * Apuntar en una lista el número de participantes únicos del chat.
    * El número de mensajes que un mismo usuario ha mandado y su contenido.
    * Eliminar mensajes en base a una lista de palabras prohibidas

3. Comandos
    * Serán de dos tipos:
        * Públicos
            * Estos podrán ser ejecutados por cualquier usuario.
        * Privados
            * Estos sólo podrán ser ejecutados por el host.
    * Tipos:
        * Entretenimiento:
            * !amor
            * !odio
        * Bot:
            * !bot
            * !info
        * desarrollador:
            * !github
            * !twitter
            * !redes
        * Utilidades:
            * !promo $1
            * !canal
4. Eventos

    * El bot deberá reaccionar a los eventos de Twitch, tanto a los del canal, como a los posibles restricciones que este sufra.
        * Globales:
            * Raid
            * Host
            * Bits
            * Subs
            * Follows
            * Bans
            * Timeout
        * Propios:
            * Ban
            * Timeout
            * Vip
            * Moderator
            * Editor
            * Subs regaladas
            * Follows

5. Otros bots
    * El bot se encargará de obtener información de otros bots a las cuales el no tiene potestad de acceso.
        *Donaciones
