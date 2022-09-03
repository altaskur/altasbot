# Altasbot

Un bot para Twitch, pensado para trabajar un backend junto a programación orientada a objetos.

## Roadmap

El proyecto esta enfocado para consumir la API de Twitch, de esta manera obtener datos del canal a escuchar.
Puntos a tener en cuenta:

* Directo
    Título del directo, categoría, y fecha del inicio.
    Fecha de finalización del directo.

* Chat
    Tiene que recabar información de los mensajes, como el usuario que ha escrito y su contenido.
    Apuntar en una lista el número de participantes únicos del chat.
    El número de mensajes que un mismo usuario ha mandado y su contenido.

* Comandos
    Serán de dos tipos:
        Públicos
            Estos podrán ser ejecutados por cualquier usuario.
        Privados
            Estos sólo podrán ser ejecutados por el host.
    Tipos:
        Entretenimiento:
            !amor
            !odio
        Bot:
            !bot
            !info
        desarrollador:
            !github
            !twitter
            !redes
        Utilidades:
            !promo $1
            !canal
* Eventos
El bot deberá reaccionar a los eventos de Twitch, tanto a los del canal, como a los posibles restricciones que este sufra.
    Globales:
        Raid
        Host
        Bits
        Subs
        Follows
        Bans
        Timeout
    Propios:
        Ban
        Timeout
        Vip
        Moderator
        Editor
        Subs regaladas
        Follows
* Otros bots
El bot se encargará de obtener información de otros bots a las cuales el no tiene potestad de acceso.
    Donaciones
