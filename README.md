# Altasbot

[<img src="https://img.shields.io/github/last-commit/altaskur/altasbot?style=for-the-badge"></img>](https://github.com/altaskur/altasbot/commits/main) 
[<img src="https://img.shields.io/github/license/altaskur/altasbot?style=for-the-badge">](https://github.com/altaskur/altasbot/blob/main/LICENSE) 
[<img src="https://img.shields.io/github/languages/top/altaskur/altasbot?style=for-the-badge">](https://github.com/altaskur/altasbot) 
[<img src="https://img.shields.io/github/v/tag/altaskur/altasbot?label=Release&style=for-the-badge">](https://github.com/altaskur/altasbot/releases) 

## ⌛ En desarollo, para ver el estado del proyecto visita la rama [dev](https://github.com/altaskur/altasbot/tree/dev)

Un bot para Twitch, pensado para trabajar un backend junto a programación orientada a objetos.

## Roadmap

El proyecto esta enfocado para consumir la API de Twitch, de esta manera obtener datos del canal a escuchar.
Puntos a tener en cuenta:

1. Directo
    - Obtener el título del directo, categoría, y fecha del inicio.
    - Obtener la fecha de finalización del directo.
    - Establecer y desactivar modo emoticonos
    - Establecer y desactivar modo sólo seguidores

2. Chat
    - Tiene que recabar información de los mensajes, como el usuario que ha escrito y su contenido.
    - Apuntar en una lista el número de participantes únicos del chat.
    - El número de mensajes que un mismo usuario ha mandado y su contenido.
    - Eliminar mensajes en base a una lista de palabras prohibidas

3. Comandos
    - Serán de dos tipos:
        - Públicos
            - Estos podrán ser ejecutados por cualquier usuario.
        - Privados
            - Estos sólo podrán ser ejecutados por el host.
    - Tipos:
        - Entretenimiento:
            - !amor
            - !odio
        - Bot:
            - !bot
            - !info
        - desarrollador:
            - !github
            - !twitter
            - !redes
        - Utilidades:
            - !promo $1
            - !canal
4. Eventos

    - El bot deberá reaccionar a los eventos de Twitch, tanto a los del canal, como a los posibles restricciones que este sufra.
        - Globales:
            - Raid
            - Host
            - Bits
            - Subs
            - Follows
            - Bans
            - Timeout
        - Propios:
            - Ban
            - Timeout
            - Vip
            - Moderator
            - Editor
            - Subs regaladas
            - Follows

5. Otros bots
    - El bot se encargará de obtener información de otros bots a las cuales el no tiene potestad de acceso.
        -Donaciones
        
        
## 💙 Agradecimientos
Seguidores que han ayudado activamente al proyecto:


[@bypepe77](https://github.com/bypepe77)


## 📧 Redes y apoyo

[<img src="https://img.shields.io/github/followers/altaskur?label=GitHub&color=inactive&logo=Github&style=flat-square"></img>](https://github.com/altaskur)
[<img src="https://img.shields.io/twitter/follow/altaskur?label=Twitter&logo=Twitter&style=flat-square"></img>](https://twitter.com/Altaskur)
[<img src="https://img.shields.io/twitch/status/altaksur?label=Twitch - stream &logo=twitch&style=flat-square"></img>](https://www.twitch.tv/altaskur)
