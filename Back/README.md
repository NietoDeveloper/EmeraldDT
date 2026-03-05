````markdown
# 💎 Emerald DT - Backend Security Cluster
### High-Engineering Emerald Commercialization Platform

Este es el núcleo de servicios (API) de Emerald DT. Diseñado bajo una arquitectura de **Máxima Seguridad** y escalabilidad de **Doble Cluster**, siguiendo los estándares visuales y técnicos inspirados en SpaceX.

---

## 🏗️ Arquitectura de Carpetas (Domain-Driven Design)

El proyecto utiliza una estructura modular donde cada recurso es independiente, facilitando el mantenimiento y la auditoría de seguridad.

```
emerald-dt-api/
├── dist/                   # Código compilado (JS) para producción
├── src/                    # Código fuente (TS)
│   ├── config/             # Configuraciones de Cluster (MongoDB) y Providers
│   ├── core/               # Lógica central: Middlewares de seguridad y Auth
│   ├── modules/            # Dominios de Negocio (Módulos independientes)
│   │   ├── emeralds/       # Gestión de gemas y certificados
│   │   ├── users/          # Gestión de perfiles y roles
│   │   └── payments/       # Pasarela de pagos (Stripe/Wompi)
│   ├── shared/             # Utilidades, constantes y tipos globales
│   ├── app.ts              # Configuración de Express y Escudos (Helmet/Cors)
│   └── server.ts           # Punto de entrada (Bootstrapping del sistema)
├── Dockerfile              # Configuración de contenedor para Railway/AWS
├── .env.example            # Plantilla de variables de entorno
├── .gitignore              # Protección de secretos
├── package.json            # Dependencias y scripts
└── tsconfig.json           # Configuración del compilador de TypeScript
```

---

## 🛡️ Protocolos de Seguridad (Ciclo S+)

- **Double Cluster Isolation:** Separación física y lógica entre los datos del catálogo público y la información transaccional sensible de los clientes.
- **JWT Multi-Role:** Control de acceso basado en roles (RBAC) para empleados del dashboard e inversores.
- **Rate Limiting:** Protección contra ataques de fuerza bruta en los endpoints de autenticación.
- **Helmet & CORS:** Configuración estricta de headers para prevenir Cross-Site Scripting (XSS).

---

## 🚀 Instalación y Desarrollo

**1. Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/emerald-dt-back.git
cd emerald-dt-back
```

**2. Instalar dependencias:**
```bash
npm install
```

**3. Configurar variables de entorno:**

Crea un archivo `.env` basado en `.env.example`.

**4. Iniciar en modo desarrollo:**
```bash
npm run dev
```

---

## 🛠️ Comandos de Ingeniería

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor con recarga en caliente (Hot Reload). |
| `npm run build` | Compila el código a JavaScript optimizado en `/dist`. |
| `npm run start` | Arranca el binario de producción (Uso en Railway/AWS). |
| `npm run lint` | Verifica la integridad del código TypeScript. |

---

## 📦 Tech Stack

- **Runtime:** Node.js v20+
- **Language:** TypeScript (Strict Mode)
- **Framework:** Express.js 5.0 (Next Gen)
- **Database:** MongoDB Atlas (Double Cluster)
- **ORM:** Mongoose
- **Security:** Helmet, Jose (JWT), Bcrypt

---

## ✍️ Autor

**Nieto Laboratory** - Building the future of Colombian Emeralds.
Diseñado para alcanzar el GitHub Top #1 Colombia.
````