CREATE DATABASE tp_s6_p14_web_design_mai_2023;
\c tp_s6_p14_web_design_mai_2023;

CREATE TABLE global(
    title VARCHAR(50) NOT NULL DEFAULT 'default title',
    snippet VARCHAR(700) NOT NULL DEFAULT 'default snippet'
);
CREATE TABLE categories(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL DEFAULT 'Category'
);
CREATE TABLE articles
(
    id SERIAL NOT NULL PRIMARY KEY,
    category INTEGER NOT NULL REFERENCES categories(id),
    title VARCHAR(100) NOT NULL,
    "date" DATE NOT NULL DEFAULT current_date,
    image VARCHAR(100) NOT NULL DEFAULT 'hero.jpeg',
    snippet VARCHAR(700) NOT NULL DEFAULT 'default article snippet'
);
CREATE TABLE paragraphs
(
    id SERIAL NOT NULL PRIMARY KEY,
    article INTEGER NOT NULL REFERENCES articles(id),
    image VARCHAR(100) DEFAULT NULL,
    title VARCHAR(100) NOT NULL DEFAULT 'Default title',
    "text" TEXT NOT NULL DEFAULT 'Default text'
);
CREATE VIEW full_paragraph AS
SELECT p.article,p.title titleparagraph,p.text,a.* ,c.name categoryname FROM paragraphs p JOIN articles a ON p.article=a.id JOIN categories c ON a.category=c.id;


CREATE VIEW category_count AS SELECT c.*,(SELECT COUNT(*) FROM articles WHERE category=c.id) count FROM categories c;

INSERT INTO categories(name) VALUES('Technology');
INSERT INTO categories(name) VALUES('Science');
INSERT INTO categories(name) VALUES('Sports');

INSERT INTO articles(category, title, "date", image, snippet)
VALUES (1, 'New features of iPhone 15', '2023-05-01', 'iphone15.jpg', 'Apple has released the latest version of the iPhone with some amazing features.');
INSERT INTO articles(category, title, "date", image, snippet)
VALUES (2, 'Scientists discover new species of butterfly', '2023-04-20', 'butterfly.jpg', 'A team of scientists have discovered a new species of butterfly in the Amazon rainforest.');
INSERT INTO articles(category, title, "date", image, snippet)
VALUES (3, 'Real Madrid wins Champions League', '2023-05-05', 'realmadrid.jpg', 'Real Madrid beat Bayern Munich 2-0 to win the Champions League.');

INSERT INTO paragraphs(article, image, title, "text")
VALUES (1, 'iphone15_1.jpg', 'Camera upgrades', 'The new iPhone 15 has a 108-megapixel camera, allowing you to capture incredibly detailed photos.');
INSERT INTO paragraphs(article, image, title, "text")
VALUES (1, 'iphone15_2.jpg', 'Improved battery life', 'The new A17 Bionic chip allows the iPhone 15 to have a much longer battery life compared to its predecessor.');
INSERT INTO paragraphs(article, image, title, "text")
VALUES (2, 'butterfly_1.jpg', 'Unique wing pattern', 'The new butterfly species has a unique wing pattern that has never been seen before.');
INSERT INTO paragraphs(article, image, title, "text")
VALUES (2, 'butterfly_2.jpg', 'Habitat and behavior', 'The butterfly is known to live in the forest canopy and has a very interesting mating behavior.');
INSERT INTO paragraphs(article, image, title, "text")
VALUES (3, 'realmadrid_1.jpg', 'Goals by Ronaldo and Benzema', 'Ronaldo scored the first goal in the 27th minute, followed by a goal from Benzema in the 63rd minute.');
INSERT INTO paragraphs(article, image, title, "text")
VALUES (3, 'realmadrid_2.jpg', 'Tactical brilliance by the coach', 'Real Madrid''s coach made some brilliant tactical decisions that helped them secure the victory.');
INSERT INTO global VALUES('BlogIA','Blog à propos d'' IA');
