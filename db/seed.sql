\c restaurant_dev

DELETE FROM restaurant;

INSERT INTO restaurant (name, location, cuisine) VALUES 
( 'Sushi Samba',
    'West Village',
      'Japanese'
), 
( 'Ilili', 
    'Flatiron',
        'Lebanese');

DELETE FROM reviews;

INSERT INTO reviews (restaurant_id, author, content) VALUES
( 1, 'Nada Z',
    'This is the best sushi Ive ever had'
), 
( 1, 'Jon',
    'You should try the Gramercy roll');
