# SocketIO Chat App

Bu basit bir sohbet uygulamasıdır, Socket.IO ve Express kullanılarak oluşturulmuştur.


## Kurulum

Bu projeyi yerel olarak çalıştırmak için şu adımları izleyin:

1. Bu depoyu klonlayın:

   ```bash
   git clone https://github.com/mevradilanozbunar/SocketIO-Chat-App.git
   ```

2. Proje dizinine gidin:

   ```bash
   cd SocketIO-Chat-App
   ```

3. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

4. Sunucuyu başlatın:

   ```bash
   nodemon index.js
   ```

Sunucu varsayılan olarak 3000 portunda başlayacaktır.

## Kullanım

Sunucu çalıştığında, sohbet uygulamasına web tarayıcınızda `http://localhost:3000` adresinden erişebilirsiniz.

## Kullanılan Teknolojiler

- [Express](https://expressjs.com/): Node.js için hızlı, fikir ayrımı yapmayan, minimalist web çerçevesi.
- [Socket.IO](https://socket.io/): Gerçek zamanlı iki yönlü olay tabanlı iletişim kütüphanesi.
