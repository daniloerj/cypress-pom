# Cypress POM CI

Proyecto de automatización de pruebas web utilizando Cypress, TypeScript y el patrón Page Object Model (POM).

## Estructura
- `src/pages`: Objetos de página (POM)
- `cypress/e2e`: Pruebas automatizadas
- `cypress.config.ts`: Configuración de Cypress
- `tsconfig.json`: Configuración de TypeScript

## Instalación
```bash
npm install
```

## Ejecución de pruebas
```bash
npx cypress run
```

## Reportes
Los reportes se generan en la carpeta `cypress/reports`.

## Integraciones CI/CD
- Jenkins Pipeline
- GitHub Actions

## Escenarios automatizados
- Login exitoso
- Usuario inválido
- Contraseña inválida
- Usuario vacío
- Contraseña vacía

## Autor
Danilo Efrain
