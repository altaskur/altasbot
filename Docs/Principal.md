# Roadmap

El proyecto esta enfocado para consumir la API de Twitch, de esta manera obtener datos del canal a escuchar.
Puntos a tener en cuenta:

1. Stream

    1.1 Comandos:
    * Activar / Desactivar modo Seguidores.
    * Activar / Desactivar modo Subscriptores.
    * Activar / Desactivar modo Emoticonos.
    * Activar / Desactivar modo lento.
    * Establecer un timeout.
    * Banear permanentemente.
    Estas funciones sólo podrán ser activadas por el dueño del canal y por sus mods.
    Estos comandos deben de ir a una biblioteca, en un archivo aparte.

2. Chat
    1.1 Monitorización:
    * Apuntar en una lista el número de participantes del chat.
    * El número de mensajes que un mismo usuario ha mandado y su contenido.
    * El bot monitoriza quien entra al chat.

    1.2 Moderación:
    * Eliminar mensajes en base a una lista de palabras prohibidas.

3. Comandos
    * Tipos de permisos:
        * Públicos
            * Estos podrán ser ejecutados por cualquier usuario.
        * Privados
            * Estos sólo podrán ser ejecutados por el host.
        * Mods
            * Estos comandos podrán ser ejecutados por mods.
    * Tipos:
        * Entretenimiento (Público):
            * !amor
                Muestra el amor existente entre dos usuarios, si no se pasan dos parámetros, lo compara el usuario que ha lanzado el comando, con el usuario mencionado.
            * !odio
                Muestra el amor existente entre dos usuarios, si no se pasan dos parámetros, lo compara el usuario que ha lanzado el comando, con el usuario mencionado.
            * !saludo
                Hace que el bot salude al usuario, que ha lanzado el comando.
            * !gintonic
                Muestra una serie de gintonics, generados aleatoriamente que @altaskur le debe a @bypepe77 por el desarrollo del bot y calcula su precio a razón de 8€ por gintonic. ("Si este comando es lanzado por @bypepe77 reproduce el audio, viva el vino!.mp3").
            * !report
                Permite al viewer amonestar al stremer y hace una cuenta de la cantidad de reports por stream.

        * Bot (Público):
            * !bot
                Hace que el bot interactué con el usuario.
            * !info
                Muestra una breve descripción sobre el bot y también, un enlace al repositorio de GitHub.

        * Canal (Público):
            * !github
            * !twitter
            * !discord
            * !redes

        * Promoción (Mod):
            * !promo $1
                Muestra el canal pasado como primera opción.
            * !tema
                Hace promoción del tema de vscode enfocado.
            * !sae
                hace promo del twitter de @saeyea.
            * !rosa
                hace promo del canal de @misscapricornio.

        * Desarrollo:
            * !test

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

5. Otros bots
    * El bot se encargará de obtener información de otros bots a las cuales el no tiene potestad de acceso.
        * Donaciones
