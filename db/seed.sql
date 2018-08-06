\c restaurant_dev

INSERT INTO restaurant (name, location, cuisine, photo) VALUES 

( 'Ilili', 
    'Flatiron',
        'Lebanese', 
         'https://static01.nyt.com/images/2008/01/30/dining/30rest600.1.jpg'),

( 'Milos', 
    'Midtown',
        'Greek',
            'https://i.pinimg.com/originals/c0/a5/b6/c0a5b6a88bf4c3d9bcdaf48dcc4ec1a6.jpg');

INSERT INTO reviews (restaurant_id, author, content) VALUES
( 1, 'Hannah',
    'I love everything Middle Eastern and Arab. Ilili has some of the best Arabic food in New York. It is a must try!!!'
), 
( 1, 'Santchel',
    'Very busy restaurant with 2 levels and multiple dining areas. Big happening bar scene. Dined upstairs which was less noisy. Food was delicious.'
    ),
( 2, 'Maya',
    'Come here for superb seafood and dining in an elegant setting. Service is prompt and a perfect place to catch a meal before a show.'
    ),
( 2, 'Sam',
    'Exceptional food with an atmosphere second to none. Fresh fish on display for you to choose from and request to be cooked, on the spot, to your hearts desire. The appetizers are delicious and they cater to every palate.'
    );