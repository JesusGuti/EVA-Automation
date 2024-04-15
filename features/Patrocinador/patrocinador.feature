Feature: Crear Patrocinador

     Background: 
          Dado el usuario se encuentra en la vista de crear Patrocinador

     Scenario: verificar que el nombre del patrocinador sea unico
          Given el usuario está en la vista de crear patrocinador
          When cree un patrocinador con un nombre repetido
          Then se muestra una alerta con el mensaje de que el patrocinador ya existe

     Scenario: verificar que el nombre del patrocinador no sea nulo
          Given el usuario está en la vista de crear patrocinador
          When cree un patrocinador sin nombre
          Then se muestra una mensaje de que el nombre de patrocinador no puede ser nulo
     
