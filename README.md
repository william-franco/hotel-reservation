# Hotel Reservation

Este projeto implementa um sistema de reserva de quartos utilizando NestJS com a arquitetura MVC (Model-View-Controller). O objetivo é simular um sistema RPC, onde o Postman é usado como cliente para consumir a API REST.


## Estrutura do projeto

```
src/
    └── features/
        └── rooms/
            ├── controllers/
            ├── models/
            ├── repositories/
            └── services/
```


## ScreenShots

| ![App Screenshot](assets/screenshots/arquitetura.png) |


## Instalação

```
  npm install
  npm run start
```


## Como testar a aplicação

Utilize o postman ou outro software de sua escolha.

Listar Quartos (GET):

```
http://localhost:3000/api/rooms
```

Reservar um Quarto (POST):

```
http://localhost:3000/api/rooms/book?type=0&guest=João
```

Listar Hóspedes (GET):

```
http://localhost:3000/api/rooms/guests
```


## License

MIT License

Copyright (c) 2025 William Franco

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
