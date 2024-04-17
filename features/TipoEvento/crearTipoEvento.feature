Feature: Crear Tipo de Evento

     Background: 
          # Given el usuario está en la vista de Crear tipo de evento
     Scenario: verificar que al crear un tipo de evento se muestre en la tabla
          Given el usuario está en la vista de crear tipo de evento
          When cree un evento 
          Then se muestra el tipo de evento en la tabla
     
     Scenario: verificar que el nombre de tipo de evento sea unico
          Given el usuario está en la vista de crear tipo de evento
          When cree un evento con un nombre repetido
          Then se muestra una alerta con el mensaje el tipo de evento ya existe
     
     Scenario: verificar que el nombre de tipo de evento no sea nulo
           Given el usuario está en la vista de crear tipo de evento
           When cree un evento sin nombre
           Then se muestra un mensaje de error

     Scenario: verificar que el nombre de tipo de evento no sea mayor a 50 caracteres
           Given el usuario está en la vista de crear tipo de evento
           When se inserta un nombre de tipo de evento de más de 50 caracteres
           Then se limita a 50 caracteres
