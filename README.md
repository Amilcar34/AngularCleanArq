# AngularCleanArq

# Verificacion de [Pre requisitos](#Pre-requisitos)

Si podes entrar a esta [URL](https://openshift.ase.local/) estas conectado ala VPN :smile:

Por terminal/cmd

| Comando               | Salida                |
| --------------------  | --------------------  |
| ```node -version```   | v14.19.3              |
| ```ng version```      | Angular CLI: 14.0.2   |
| ```npm -v```          | 8.13.2                |


# Pre requisitos
 
*   Estar conectado a la red de ASE / Medife
*   Angular CLI: 14.0.5
*   Node: 14.19.3
*   Package Manager: npm 8.13.2 
*   Typescript :4.7.4

# Arquitectura
Este proyecto esta hecho bajo la linea de diseño **Clean Architecture** (*Arquitectura Limpia*)

## Nociones Básicas de lo implementado

En **src/app/domain** *se centra* en **¿Qué queremos?**  
En **src/app/domain/model** se ubican las reglas generales de alto nivel.  
En **src/app/domain/usecase** reglas comerciales de la aplicación, encapsula e implementa todos los *casos de uso* del sistema.  
En **src/app/infraestructure** *se centra* en **¿Cómo lo hacemos?**  
En **src/app/ui** se centra en *Qué exponer y cómo exponer*   

## Vaga Idea


# Notas

La UI del proyecto se basa en Atomic Design (Brad Frost)