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
    "date" DATE NOT NULL DEFAULT current_date,
    snippet VARCHAR(700) NOT NULL DEFAULT 'default article snippet'
);
CREATE TABLE paragraphs
(
    id SERIAL NOT NULL PRIMARY KEY,
    article INTEGER NOT NULL REFERENCES articles(id),
    "text" TEXT NOT NULL DEFAULT 'Default text'
); 
CREATE TABLE tags
(
    id SERIAL NOT NULL PRIMARY KEY,
    article INTEGER NOT NULL REFERENCES articles(id),
    tag VARCHAR(100) NOT NULL
);