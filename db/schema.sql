-- hey --


USE i9vv64i37w3cosgu;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger VARCHAR(255) NOT NULL,
eaten BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);

