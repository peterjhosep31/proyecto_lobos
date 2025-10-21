# Proyecto Lobos

Este repositorio contiene un sitio web estático servido con NGINX y un túnel de Cloudflare.

## Configuración de Docker Compose

### ⚠️ Importante: Configuración Local

El archivo `docker-compose.yml` **NO debe subirse al repositorio** ya que contiene información sensible y rutas específicas de tu sistema local.

### Pasos para configurar localmente:

1. Copia el archivo de ejemplo para crear tu configuración local:
   ```bash
   cp docker-compose.example.yml docker-compose.yml
   ```

2. Configura las variables de entorno necesarias:
   ```bash
   export CLOUDFLARE_TUNNEL_ID=tu-tunnel-id-aqui
   export CLOUDFLARED_CREDENTIALS_PATH=/ruta/privada/a/tus/credenciales
   ```

3. Levanta los contenedores:
   ```bash
   docker compose up -d
   ```

### Variables de Entorno Requeridas:

- **`CLOUDFLARE_TUNNEL_ID`**: El UUID de tu túnel de Cloudflare
- **`CLOUDFLARED_CREDENTIALS_PATH`**: Ruta absoluta a tu carpeta de credenciales de Cloudflare (por defecto: `./cloudflared` si no se especifica)

### Ejemplo Completo:

```bash
cp docker-compose.example.yml docker-compose.yml
export CLOUDFLARE_TUNNEL_ID=d31fd205-eafc-4f1f-bac8-f45c2c3a4f63
export CLOUDFLARED_CREDENTIALS_PATH=/home/usuario/.cloudflared
docker compose up -d
```

### Seguridad

Las credenciales de Cloudflare y el archivo `docker-compose.yml` están incluidos en `.gitignore` para evitar que se suban accidentalmente al repositorio. **Nunca compartas tus credenciales o el UUID de tu túnel públicamente.**

## Estructura del Proyecto

- `index.html`: Página principal
- `habitat.html`: Información sobre el hábitat de los lobos
- `alimento.html`: Información sobre la alimentación
- `nginx.conf`: Configuración del servidor NGINX
- `docker-compose.example.yml`: Plantilla de configuración de Docker Compose
