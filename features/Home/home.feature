Feature: Home

    Background: 
        Dado el usuario se encuentra en la vista principal de la pagina

    Scenario: Verificar que los eventos se filtran de mas antiguo a reciente
        Given el usuario está en la vista principal
        When filtre por antiguo a reciente
        Then se muestran los eventos ordenados de antiguo a reciente

    Scenario: Verificar que los eventos se filtran de mas reciente a antiguo
        Given el usuario está en la vista principal
        When filtre por reciente a antiguo
        Then se muestran los eventos ordenados de reciente a antiguo

    Scenario: Verificar que los eventos se filtran de a-z
        Given el usuario está en la vista principal
        When filtre por a-z
        Then se muestran los eventos ordenados de la a hasta la z

    Scenario: Verificar que los eventos se filtran de z-a
        Given el usuario está en la vista principal
        When filtre por z-a
        Then se muestran los eventos ordenados de la z hasta la a

    Scenario: Verificar que los eventos se filtran en curso
        Given el usuario está en la vista principal
        When filtre por eventos en curso
        Then se muestran solo eventos en curso