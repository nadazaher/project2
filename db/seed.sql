\c restaurant_dev

DELETE FROM restaurant;
INSERT INTO restaurant (name, location, cuisine, photo) VALUES 

( 'Ilili', 
    'Flatiron',
        'Lebanese', 
         'https://static01.nyt.com/images/2008/01/30/dining/30rest600.1.jpg'),

( 'Milos', 
    'Midtown',
        'Greek',
            'https://i.pinimg.com/originals/c0/a5/b6/c0a5b6a88bf4c3d9bcdaf48dcc4ec1a6.jpg'),

( 'Symposium',
    'Upper West Side',
        'Greek',
            'https://i.pinimg.com/originals/d5/61/ea/d561ea8fa043918cbb60fa36d4a6a5c9.jpg'),

( 'Cacio E Pepe',
    'East Village',
        'Italian',   
            'https://cdn1.gbot.me/photos/Sm/SV/1420748975/-Cacio_e_Pepe-20000000008719412-500x375.jpg'),

( 'Hillstone',
    'Midtown',
        'American',
            'https://media-cdn.tripadvisor.com/media/photo-s/11/3a/0b/af/hillstone-park-avenue.jpg'),

( 'The Smith',
    'East Village',
        'American',
            'https://thesmithrestaurant.com/wp-content/uploads/2015/02/TS_EV_EVENT2.jpg'),

( 'Buddakan',
    'Chelsea',
       'Chinese',
            'https://static1.squarespace.com/static/565a9019e4b0a63eb2cc2b7d/t/5a20438b0d9297af42ddfc84/1512063892268/buddukan');

DELETE FROM reviews;

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
    ),
( 3, 'Natalia',
    'Cozy environment that makes you feel like youre eating a home-cooked meal.'
    ),
( 3, 'Marcos',
    'Definitely recommend the dips sampler, octopus, souvlaki, and the sangria to top it off.'
    ),
(4, 'Kristin',
 'The signature dish is to die for, and the wine offerings are diverse enough and affordable.'
 ),
(4, 'Holly',
 'Popular destination for authentic good Italian food in the East village. The chef sometimes loves readapting recipes to a more modern and contemporary view, and the result is always good.'
 ),
  (5, 'Mike',
 'Best burgers in town. Also a great spot for sushi, steak, spinach dip - you cant go wrong.'
 ),
 (5, 'Rebecca',
 'Love the atmosphere especially with the live blues music playing. A safe bet to take anyone since their variety of menu options are great even though my favorite is the fried chicken sandwich.'
 ),
 (6, 'Diego',
 'One of my favorite places in the neighborhood. Good food and good vibe - always consistent.'
 ),
(6, 'Linda',
 'Definitely recommended for brunch. Avocado toast and french fries are a go to. Also a boozy brunch as they have good cocktails!'
 ),
(7, 'Carly',
 'Upscale Chinese. Top menu items - edamame dumpling, chili rock shrimp, miso cod, and the crying chocolate.'
 ),
(7, 'Jennifer',
 'Beautiful decor and ambiance. Food was delectable. Service was very helpful with suggestions and also attentive. '
 );

