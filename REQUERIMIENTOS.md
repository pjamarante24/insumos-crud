# Requerimientos

Administrador de insumos

## Esquema

### insumos

| field | type |
|---|---|
|_id|INT AUTO INCREMENT|
|nombre|STRING|
|descripcion|STRING|
|unidad|ENUM|
|costo_unitario|NUMBER|

### clasificacion_bienes_servicios

| field | type |
|---|---|
|_id|STRING|
|denominacion|STRING|


### clasificacion_gasto

| field | type |
|---|---|
|_id|STRING|
|denominacion|STRING|
