# AngularCleanArq

# Pre requisitos y verificacion 

*   Estar conectado a la red de ASE / Medife

Si podes entrar a esta [URL](https://openshift.ase.local/) estas conectado ala VPN :smile:

| Herramienta       | Terminal/CMD  | Salida                |
| ----------------- | ------------- | --------------------- |
| Angular CLI       | `node -v`     | v14.19.3              |
| Node              | `ng version`  | Angular CLI: 14.0.2   |
| Package Manager   | `npm -v`      | 8.13.2                |

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
La migracion a **Jest** se realizo mediante el siguiente [tutorial](https://gist.github.com/Klerith/ca4573d13844f53af3ff68846a238fc3
)