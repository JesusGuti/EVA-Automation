Feature: Crear Tipo de Evento

     Background: 
          # Given el usuario está en la vista de Crear tipo de evento
     Scenario: verificar que el nombre de la playlist sea unico
          Given el usuario está en la sección de crear tipo de evento
          When cree un evento con un nombre repetido
          Then se muestra una alerta
     
     # Scenario: verificar que el nombre de la playlist no sea nulo
     #      Given el usuario está en la vista de crear tipo de evento
     #      When cree un evento sin nombre
     #      Then se muestra un mensaje de error

