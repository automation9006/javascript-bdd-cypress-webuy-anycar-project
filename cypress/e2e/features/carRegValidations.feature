Feature: car registration search validations

  Background:
        Given A user has access to home page
@regression
Scenario: Validate car reg details with valid data
       When enter car reg details
        | carreg  | miles  |   
        | AD58 VNF| 50000  |
       Then validate car brand and model details
        | manfactname | modelname                               | year |    
        | BMW         | 1 SERIES DIESEL COUPE - 120d M Sport 2dr| 2008 |   

@regression
Scenario: Validate car reg details with invalid data
       When enter car reg details
        | carreg  |  miles  |
        | BW57 BOW|  50000  |
       Then validate error message " Sorry, we couldn't find your car" 