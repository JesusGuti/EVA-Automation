Feature: Crear Actividad

     Background: 
          Dado el usuario se encuentra en la vista de crear actividad

     Scenario: verificar que el nombre de la actividad no sea nulo
          Given el usuario está en la vista de crear actividad
          When cree una actividad sin nombre
          Then se muestra un mensaje con el nombre no puede estar vacio

     Scenario: verificar que al crear una actividad se muestre el evento
          Given el usuario está en la vista de crear actividad
          When cree una actividad
          Then se muestra el evento

     Scenario: verificar que el nombre de la actividad sea unico
          Given el usuario está en la vista de crear actividad
          When cree una actividad con nombre ya existente
          Then se muestra una alerta

     Scenario: verificar que la fecha de inicio de la actividad no sea menor a fecha de inicio de la actividad
          Given el usuario está en la vista de crear actividad
          When ponga una fecha menor a inicio evento
          Then se muestra rango de fechas no valido

     Scenario: verificar que la fecha de inicio de la actividad no sea menor a fecha actual si el evento inicio
     Given el usuario está en la vista de crear actividad
     When ponga una fecha menor a la actual
     Then se muestra rango de fechas no valido

     Scenario: verificar que la fecha de fin de la actividad no sea mayor a fecha de fin del evento    
     Given el usuario está en la vista de crear actividad
     When ponga fecha mayor a fin evento
     Then se muestra rango de fechas no valido