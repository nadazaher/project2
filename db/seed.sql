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
            'https://static1.squarespace.com/static/565a9019e4b0a63eb2cc2b7d/t/5a20438b0d9297af42ddfc84/1512063892268/buddukan'),

    
( 'Red Farm', 
    'Upper West Side',
        'Chinese',
            'http://www.glenwoodnyc.com/manhattan-living/wp-content/uploads/2011/09/red-farm-nyc-dim-sum-restaurant-village.jpg'),

( 'Eataly', 
    'Flatiron',
        'Italian',
        'https://static1.squarespace.com/static/565a9019e4b0a63eb2cc2b7d/t/5a20438b0d9297af42ddfc84/1512063892268/buddukan'),

( 'Junoon', 
    'Flatiron',
        'Indian',
        'https://static1.squarespace.com/static/565a9019e4b0a63eb2cc2b7d/t/5a20438b0d9297af42ddfc84/1512063892268/buddukan'),

('Manousheh', 
    'Greenwich Village',
        'Lebanese',
        'https://static1.squarespace.com/static/565a9019e4b0a63eb2cc2b7d/t/5a20438b0d9297af42ddfc84/1512063892268/buddukan'), 

('La Esquina', 
    'East Village',
        'Mexican',
        'https://static1.squarespace.com/static/565a9019e4b0a63eb2cc2b7d/t/5a20438b0d9297af42ddfc84/1512063892268/buddukan'), 

('aRoqa',
    'Chelsea',
        'Indian',
        'https://static1.squarespace.com/static/565a9019e4b0a63eb2cc2b7d/t/5a20438b0d9297af42ddfc84/1512063892268/buddukan'),

('Taqueria Diana',
    'Midtown',
        'Mexican',
        'https://static1.squarespace.com/static/565a9019e4b0a63eb2cc2b7d/t/5a20438b0d9297af42ddfc84/1512063892268/buddukan'),

('Babbo',
    'Greenwich Village',
        'Italian',
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
 ),

(8, 'Judi',
 'The vibe of this place is like no ordinary Chinese restaurant it is very laid back and different. The decor reminds you if you were at a barn or farm. The food and flavors are quite unique and satisfying. '
 ),
 (8, 'Jim',
 'Sunday night dinner on weekend trip to NY City. Restrauant was recommended by a friend in the city. The food and presentation were superb. Great attention to detail.'
 ),
(9, 'Ricardo',
 'There are multiple places within Eataly. The rooftop bar is lush, with tasty cocktails and good eats. '
 ),
 (9, 'Tatiana',
 'I just love everything about Eataly. Fabulous quality food, incredible selection. Knowledgeable expert staff. Fantastic range of produce, fresh daily. Wonderful Cafés, bars and restaurants.'
 ),
(10, 'Raj',
 'Came here for restaurant week and was able to enjoy a tasting menu. Very elegant Indian authentic restaurants. The flavors are not overdone, but just right.'
 ),
 (10, 'Erin',
 'The salmon starter was extremely flavorsome. But the main course was outstanding. It was essentially a vegetable curry with rice and chapati but was by far the best curry I’ve ever had. It was season to perfection and had a perfect balance of flavors.'
 ),
 (11, 'Mahmoud',
 'This cute little spot has the best manakeesh in NYC. As an extra pointer, try the labne, and tell them to add it to your zaatar manoushe, its a union thats meant to be.'
 ),
(11, 'Dana',
 'Honestly some of the best zataar and jibneh Ive ever had and Ive had plenty in the Middle East.'
 ),
 (12, 'Anita',
 'I love the vibes in this place. The servers are really nice, and the food is fantastic. Im a big fan of mexican, and this definitely stands up to a lot of the other mex places in the area.'
 ),
  (12, 'Carlos',
 'Best guacamole and best tacos in the city and trust me Ive tried many.'
 ),
  (13, 'Farah',
 'Tapas-style Indian restaurant. A very good experience and I would certainly go back again, probably mainly for their apps and tasting menu.'
  ),
(13, 'Akrati',
 'This was a fun and interesting experience for us!  I enjoyed their Indian tapas/fusion vibe and cute cocktails.'
  ),
(14, 'Alejandro',
 'I come here for the nachos and cocktails. Never a bad choice.'
  ),
(14, 'Lara',
 'Cute spot. Trendy. Food is decent. Would go back if I wanted some tacos.'
  ),
(15, 'Enrico',
 'Babbo is a solid restaurant. The price point is reasonable considering the quality and Michelin star rating as well. The grilled octopus is a winner. The pastas were good and sizeable in portions.'
  ),
(15, 'Isabel',
 'Exceptional on every level, from the welcoming team, to the waiters, support staff and of course - the exceptional food. Loved the goat cheese tortellini and asparagus ravioli which could easily be a meal by themselves.');

