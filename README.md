# MasRecetas
Proyecto web:
  * Backend -> Symfony
  * Frontend -> Angular
  * Base de datos -> MySql
  * Estructura deploy -> Docker

### Prerrequisito tener instalado docker
 
## Primer despliegue del proyecto

* Clonamos el repositorio

`git clone https://github.com/jdec92/MasRecetas.git`

* Nos situamos dentro del proyecto

`cd MasRecetas`

* Y levantamos los dockers

`sudo docker-compose up -d --build`

* Una vez hemos lanzado los docker entramos dentro del docker de php, he instalamos los componentes de symfony

`docker exec -it masrecetas_php_1 bash`

`composer install`

* Salimos del docker de php y entramos al docker de node y compilamos el proyecto de angular

`exit`

`docker exec -it masrecetas_node_1 bash`

`ng build`

Finalmente salimos y ya tendremos desplegado el proyecto al completo

Direcciones de acceso:
 * Angular https://localhots
 * Symfony https://localhosts/api/
 
## Despliegue del proyecto en otras ocasiones

`sudo docker-compose up -d`

