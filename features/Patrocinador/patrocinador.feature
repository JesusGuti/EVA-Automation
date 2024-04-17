Feature: Crear Patrocinador

     Background: 
          Dado el usuario se encuentra en la vista de crear Patrocinador

      Scenario: verificar que el patrocinador se cree
          Given el usuario está en la vista de crear patrocinador
          When cree un patrocinador con datos validos
          Then se muestra el patrocinador en la tabla

     Scenario: verificar que el nombre del patrocinador sea unico
          Given el usuario está en la vista de crear patrocinador
          When cree un patrocinador con un nombre repetido
          Then se muestra una alerta con el mensaje de que el patrocinador ya existe

     Scenario: verificar que el nombre del patrocinador no sea nulo
          Given el usuario está en la vista de crear patrocinador
          When cree un patrocinador sin nombre
          Then se muestra una mensaje de que el nombre de patrocinador no puede ser nulo
     
     Scenario: verificar que el peso de la imagen no sea mayor a 2mb
          Given el usuario está en la vista de crear patrocinador
          When cree un patrocinador con una imagen que pese mas de 2mb
          Then se muestra una alerta con el mensaje de que la imagen es muy grande

     Scenario: verificar que el archivo dada sea una imagen
          Given el usuario está en la vista de crear patrocinador
          When cree un patrocinador con un archivo que no sea una imagen
          Then se muestra una alerta con el mensaje de que el archivo no es una imagen
          
     Scenario: verificar que el enlace del patrocinador no sea nulo
          Given el usuario está en la vista de crear patrocinador
          When cree un patrocinador con enlace incorrecto
          Then el campo de enlace se pinta de rojo