CREATE DATABASE tp_s6_p14_web_design_mai_2023;
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
    snippet VARCHAR(700) NOT NULL DEFAULT 'default article snippet'
);
CREATE TABLE paragraphs
(
    id SERIAL NOT NULL PRIMARY KEY,
    article INTEGER NOT NULL REFERENCES articles(id),
    title VARCHAR(100) NOT NULL DEFAULT 'Default title',
    "text" TEXT NOT NULL DEFAULT 'Default text'
);
CREATE TABLE tags
(
    id SERIAL NOT NULL PRIMARY KEY,
    article INTEGER NOT NULL REFERENCES articles(id),
    tag VARCHAR(100) NOT NULL
);

INSERT INTO categories (name) VALUES ('Politics');
INSERT INTO categories (name) VALUES ('Technology');
INSERT INTO categories (name) VALUES ('Sports');
INSERT INTO categories (name) VALUES ('Entertainment');

-- Insert articles
INSERT INTO articles (category, title, "date", snippet) VALUES (1, 'Election Results 2023', '2023-05-01', 'The results of the 2023 election are in...');
INSERT INTO articles (category, title, "date", snippet) VALUES (2, 'New Smartphone Released', '2023-05-02', 'The latest smartphone from XYZ Company is now available...');
INSERT INTO articles (category, title, "date", snippet) VALUES (3, 'Local Team Wins Championship', '2023-05-03', 'The hometown team takes home the trophy after a hard-fought season...');
INSERT INTO articles (category, title, "date", snippet) VALUES (4, 'Celebrities Attend Met Gala', '2023-05-04', 'The annual fashion event is attended by some of the biggest names in Hollywood...');

-- Insert paragraphs
INSERT INTO paragraphs (article, title, "text") VALUES (1, 'Introduction', 'The 2023 election was one of the most closely watched in recent history...');
INSERT INTO paragraphs (article, title, "text") VALUES (1, 'Results', 'After a long night of vote counting, the winner was announced...');
INSERT INTO paragraphs (article, title, "text") VALUES (2, 'Features', 'The new smartphone boasts a high-resolution screen and advanced camera system...');
INSERT INTO paragraphs (article, title, "text") VALUES (2, 'Price', 'The phone is priced competitively compared to other high-end devices...');
INSERT INTO paragraphs (article, title, "text") VALUES (3, 'Road to Victory', 'The team had a successful regular season and carried that momentum into the playoffs...');
INSERT INTO paragraphs (article, title, "text") VALUES (3, 'Championship Game', 'In a thrilling final match, the team emerged victorious over their opponents...');
INSERT INTO paragraphs (article, title, "text") VALUES (4, 'Red Carpet Fashion', 'The Met Gala is known for its extravagant and often daring fashion choices...');
INSERT INTO paragraphs (article, title, "text") VALUES (4, 'Celebrity Sightings', 'Many A-listers were in attendance, including several surprise guests...');

-- Insert tags
INSERT INTO tags (article, tag) VALUES (1, 'election');
INSERT INTO tags (article, tag) VALUES (1, 'politics');
INSERT INTO tags (article, tag) VALUES (2, 'smartphone');
INSERT INTO tags (article, tag) VALUES (2, 'technology');
INSERT INTO tags (article, tag) VALUES (3, 'sports');
INSERT INTO tags (article, tag) VALUES (3, 'championship');
INSERT INTO tags (article, tag) VALUES (4, 'fashion');
INSERT INTO tags (article, tag) VALUES (4, 'celebrities');
