CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT
);

INSERT INTO restaurants (name, location, price_range) VALUES ('Wendy''s', 'Wyoming', 4);