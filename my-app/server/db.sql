-- for help \?
-- list database \l
-- connect to database \c <database>
-- 

CREATE TABLE nechromatics (
    id BIGSERIAL NOT NULL,
    price INT
);

INSERT INTO nechromatics (name, location, price_range) VALUES ('Nechro', 'Matics', 4);