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



INSERT INTO global VALUES('BlogIA','Blog à propos d'' IA');
INSERT INTO categories(name) VALUES ('Définitions');
INSERT INTO categories(name) VALUES ('Utilisations');
INSERT INTO categories(name) VALUES ('Limites');
INSERT INTO categories(name) VALUES ('Nouveautés');
INSERT INTO articles (category, title, image, snippet) VALUES (1, 'Qu''est-ce que l''intelligence artificielle ?', 'ia.jpg', 'Découvrez les fondamentaux de l''intelligence artificielle et ses principales caractéristiques.');
INSERT INTO articles (category, title, image, snippet) VALUES (2, 'L''IA dans la médecine', 'medecine.jpg', 'Comment l''IA est utilisée pour améliorer la qualité des soins médicaux ?');
INSERT INTO articles (category, title, image, snippet) VALUES (3, 'Les limites de l''IA', 'limites.jpg', 'Les limites de l''intelligence artificielle : quels sont les défis à relever ?');
INSERT INTO paragraphs (article, title, text) VALUES (1, 'Introduction', 'L''intelligence artificielle est un domaine de recherche qui vise à créer des machines capables de penser et d''apprendre comme des êtres humains.');
INSERT INTO paragraphs (article, title, text) VALUES (1, 'Les caractéristiques de l''IA', 'Les principales caractéristiques de l''intelligence artificielle sont la capacité à raisonner, apprendre, percevoir, communiquer et agir.');
INSERT INTO paragraphs (article, title, text) VALUES (2, 'L''IA dans la radiologie', 'L''intelligence artificielle est utilisée dans la radiologie pour aider les médecins à détecter les anomalies et à fournir un diagnostic plus précis.');
INSERT INTO paragraphs (article, title, text) VALUES (2, 'Les avantages de l''IA en médecine', 'Les avantages de l''intelligence artificielle en médecine incluent la réduction des erreurs médicales, la personnalisation des traitements et l''amélioration de la recherche.');
INSERT INTO paragraphs (article, title, text) VALUES (3, 'Les limites de l''IA', 'Les limites de l''intelligence artificielle comprennent le manque de créativité, l''absence d''empathie et la difficulté à traiter des situations imprévues.');
INSERT INTO paragraphs (article, title, text) VALUES (3, 'Les défis à relever', 'Les défis à relever pour améliorer l''IA incluent la résolution de problèmes éthiques, la réglementation et la surveillance de l''utilisation de l''IA.');
INSERT INTO paragraphs (article, title, text, image) VALUES (1, 'L''histoire de l''IA', 'L''histoire de l''intelligence artificielle remonte à l''Antiquité, avec des légendes de créatures artificielles comme le Golem et l''automate de Vaucanson.', 'histoire.jpg');
INSERT INTO articles(category, title, date, image, snippet) VALUES (1, 'Qu''est-ce que l''IA ?', '2023-05-07', 'ia.jpg', 'L''intelligence artificielle (IA) est un domaine de l''informatique qui vise à créer des machines capables de réaliser des tâches qui nécessitent normalement l''intelligence humaine, comme la reconnaissance vocale ou visuelle, la prise de décision ou le raisonnement. Cette technologie est de plus en plus présente dans notre quotidien.');
INSERT INTO paragraphs(article, image, title, text) VALUES (1, 'ia1.jpg', 'Définition', 'L''IA désigne l''ensemble des techniques et des méthodes permettant de concevoir des programmes informatiques capables de reproduire des comportements ou des fonctions qui, pour un être humain, demandent de l''intelligence.');
INSERT INTO paragraphs(article, image, title, text) VALUES (1, 'ia2.jpg', 'Histoire', 'Les premières recherches en IA remontent aux années 1950. À cette époque, les chercheurs cherchaient à comprendre comment les machines pourraient imiter la pensée humaine et résoudre des problèmes complexes.');
INSERT INTO articles(category, title, date, image, snippet) VALUES (2, 'Applications de l''IA', '2023-05-08', 'ai-applications.jpg', 'L''intelligence artificielle est utilisée dans de nombreux domaines, tels que la médecine, la finance, les transports, la sécurité ou encore l''énergie. Elle permet notamment d''automatiser des tâches, de prendre des décisions en temps réel ou de prédire des comportements.');
INSERT INTO paragraphs(article, image, title, text) VALUES (2, 'ai1.jpg', 'Santé', 'L''IA est utilisée pour la détection précoce de maladies et la recherche de traitements personnalisés pour chaque patient. Elle peut également être utilisée pour améliorer les résultats de la chirurgie et de la réadaptation.');
INSERT INTO paragraphs(article, image, title, text) VALUES (2, 'ai2.jpg', 'Finance', 'L''IA est utilisée pour l''analyse des données financières et l''identification des tendances du marché. Elle permet également d''automatiser des tâches telles que la détection de fraudes, la gestion des risques ou la surveillance des investissements.');
INSERT INTO articles(category, title, date, image, snippet) VALUES (3, 'Limites de l''IA', '2023-05-09', 'ai-limites.jpg', 'Malgré ses nombreuses applications, l''IA présente également des limites et des risques, tels que la dépendance aux données, la perte d''emplois, l''introduction de biais ou la prise de décisions incohérentes.');
INSERT INTO paragraphs(article, image, title, text) VALUES (3, 'ai3.jpg', 'Biais', 'Les systèmes d''IA peuvent être biaisés en fonction des données sur lesquelles ils ont été entraînés. Par exemple, si les données utilisées pour former un système de reconnaissance faciale ne représentent pas de manière équitable toutes les populations, le système peut produire des résultats erronés pour certaines personnes.');
INSERT INTO articles(category, title, date, image, snippet) VALUES (1, 'Qu''est-ce que l''IA ?', '2023-05-07', 'ia.jpg', 'L''intelligence artificielle (IA) est un domaine de l''informatique qui vise à créer des machines capables de réaliser des tâches qui nécessitent normalement l''intelligence humaine, comme la reconnaissance vocale ou visuelle, la prise de décision ou le raisonnement. Cette technologie est de plus en plus présente dans notre quotidien.');
INSERT INTO paragraphs(article, image, title, text) VALUES (1, 'ia1.jpg', 'Définition', 'L''IA désigne l''ensemble des techniques et des méthodes permettant de concevoir des programmes informatiques capables de reproduire des comportements ou des fonctions qui, pour un être humain, demandent de l''intelligence.');
INSERT INTO paragraphs(article, image, title, text) VALUES (1, 'ia2.jpg', 'Histoire', 'Les premières recherches en IA remontent aux années 1950. À cette époque, les chercheurs cherchaient à comprendre comment les machines pourraient imiter la pensée humaine et résoudre des problèmes complexes.');
INSERT INTO articles(category, title, date, image, snippet) VALUES (2, 'Applications de l''IA', '2023-05-08', 'ai-applications.jpg', 'L''intelligence artificielle est utilisée dans de nombreux domaines, tels que la médecine, la finance, les transports, la sécurité ou encore l''énergie. Elle permet notamment d''automatiser des tâches, de prendre des décisions en temps réel ou de prédire des comportements.');
INSERT INTO paragraphs(article, image, title, text) VALUES (2, 'ai1.jpg', 'Santé', 'L''IA est utilisée pour la détection précoce de maladies et la recherche de traitements personnalisés pour chaque patient. Elle peut également être utilisée pour améliorer les résultats de la chirurgie et de la réadaptation.');
INSERT INTO paragraphs(article, image, title, text) VALUES (2, 'ai2.jpg', 'Finance', 'L''IA est utilisée pour l''analyse des données financières et l''identification des tendances du marché. Elle permet également d''automatiser des tâches telles que la détection de fraudes, la gestion des risques ou la surveillance des investissements.');
INSERT INTO articles(category, title, date, image, snippet) VALUES (3, 'Limites de l''IA', '2023-05-09', 'ai-limites.jpg', 'Malgré ses nombreuses applications, l''IA présente également des limites et des risques, tels que la dépendance aux données, la perte d''emplois, l''introduction de biais ou la prise de décisions incohérentes.');
INSERT INTO paragraphs(article, image, title, text) VALUES (3, 'ai3.jpg', 'Biais', 'Les systèmes d''IA peuvent être biaisés en fonction des données sur lesquelles ils ont été entraînés. Par exemple, si les données utilisées pour former un système de reconnaissance faciale ne représentent pas de manière équitable toutes les populations, le système peut produire des résultats erronés pour certaines personnes.');
INSERT INTO articles (category, title, date, image, snippet)
VALUES (1, 'Qu''est-ce que l''intelligence artificielle ?', '2023-05-07', 'ia.jpg', 'Découvrez la définition de l''IA et ses différentes approches.');
INSERT INTO articles (category, title, date, image, snippet)
VALUES (1, 'Les différents types d''intelligence artificielle', '2023-05-08', 'ia-types.jpg', 'Il existe plusieurs types d''IA. Découvrez-les dans cet article.');
INSERT INTO paragraphs (article, image, title, text)
VALUES (1, 'ia-representation.jpg', 'Représentation de l''IA', 'L''intelligence artificielle est une technologie qui permet à une machine de simuler l''intelligence humaine. Elle peut prendre plusieurs formes, comme les chatbots, les systèmes de reconnaissance vocale ou encore les voitures autonomes.');
INSERT INTO paragraphs (article, image, title, text)
VALUES (1, 'ia-apprentissage.jpg', 'Apprentissage automatique', 'L''apprentissage automatique est l''un des principaux domaines de l''intelligence artificielle. Il permet à une machine d''apprendre de manière autonome à partir de données et de prendre des décisions en conséquence.');
INSERT INTO paragraphs (article, image, title, text)
VALUES (1, NULL, 'Les différentes approches de l''IA', 'Il existe plusieurs approches de l''intelligence artificielle, comme l''apprentissage profond, l''apprentissage supervisé ou encore l''apprentissage non supervisé.');
INSERT INTO paragraphs (article, image, title, text)
VALUES (2, 'ia-automate.jpg', 'Automate programmable', 'L''automate programmable est le premier type d''intelligence artificielle. Il permet de programmer une machine pour qu''elle effectue des tâches spécifiques.');
INSERT INTO paragraphs (article, image, title, text)
VALUES (2, 'ia-symbolique.jpg', 'IA symbolique', 'L''intelligence artificielle symbolique utilise des règles et des symboles pour simuler le raisonnement humain.');
INSERT INTO paragraphs (article, image, title, text)
VALUES (2, 'ia-connexionniste.jpg', 'IA connexionniste', 'L''intelligence artificielle connexionniste est basée sur les réseaux de neurones artificiels, qui simulent le fonctionnement du cerveau humain.');
INSERT INTO articles (category, title, date, image, snippet)
VALUES (2, 'L''IA dans la finance', '2023-05-09', 'ia-finance.jpg', 'Découvrez comment l''intelligence artificielle est utilisée dans le domaine de la finance.');
INSERT INTO articles (category, title) VALUES (1, 'Qu''est-ce que l''IA ?');
INSERT INTO paragraphs (article, title, "text") VALUES (1, 'Définition de l''IA', 'L''intelligence artificielle (IA) est un domaine de l''informatique qui se consacre à la conception de machines capables de reproduire des comportements intellectuels humains, comme la perception, l''apprentissage, le raisonnement et la prise de décision.');
INSERT INTO articles (category, title) VALUES (2, 'Utilisations de l''IA');
INSERT INTO paragraphs (article, title, "text") VALUES (2, 'L''IA dans les systèmes de recommandation', 'L''IA est largement utilisée dans les systèmes de recommandation, comme ceux utilisés par Netflix ou Amazon, pour proposer des produits ou des contenus adaptés aux goûts de l''utilisateur.');
INSERT INTO paragraphs (article, title, "text") VALUES (2, 'L''IA dans la santé', 'L''IA est utilisée dans de nombreux domaines de la santé, tels que la détection précoce de maladies, l''analyse d''images médicales et la découverte de nouveaux médicaments.');
INSERT INTO articles (category, title) VALUES (3, 'Limites de l''IA');
INSERT INTO paragraphs (article, title, "text") VALUES (3, 'Limites éthiques', 'L''IA soulève de nombreuses questions éthiques, comme la responsabilité en cas d''erreur ou d''accident causé par une machine autonome, ou la question de savoir si une machine peut réellement avoir une conscience.');
INSERT INTO paragraphs (article, title, "text") VALUES (3, 'Limites techniques', 'Malgré des progrès significatifs, l''IA présente encore de nombreuses limites techniques, notamment en ce qui concerne la compréhension du langage naturel ou la capacité à apprendre de manière autonome.');
INSERT INTO articles (category, title) VALUES (4, 'Nouveautés en IA');
INSERT INTO paragraphs (article, title, "text") VALUES (4, 'GPT-3', 'GPT-3 est une IA développée par OpenAI qui est capable de produire du texte de qualité équivalente à celui écrit par un humain. Elle a suscité beaucoup d''enthousiasme et de craintes quant à son potentiel pour révolutionner les industries créatives et la manière dont nous communiquons en ligne.');
INSERT INTO paragraphs (article, title, "text") VALUES (4, 'DeepMind et AlphaFold', 'DeepMind, une filiale de Google, a récemment développé une IA appelée AlphaFold qui est capable de prédire la structure tridimensionnelle des protéines avec une précision comparable à celle obtenue par des méthodes expérimentales coûteuses. Cette avancée pourrait avoir un impact significatif sur la recherche médicale et pharmaceutique.');
