### Create Table
```
CREATE TABLE table_name(
	column_name1 datatype constraint,
	column_name2 datatype constraint,
	column_name3 datatype constraint
);
```

### Insert Values into Table
```
INSERT INTO table_name (column_name1,column_name2)
VALUES (col1_content1,col2_cotent1), (col1_content2,col2_cotent2);
```

### Select Command

```
SELECT * FROM table_name; (* means all)

SELECT col_1,col_2 FROM table_name;

SELECT DISTINCT age FROM table_name; (Selects only the unique age values)
```

### Constraints

- NOT NULL : columns can't have null value
- UNIQUE : all values in the column are different
- DEFAULT : sets a default value for the column
- CHECK : It can limit the values allowed in a column

### Key Constraints

##### Primary Key : makes a column unique & not null but used only for one
```
CREATE TABLE client(
	id INT,
	PRIMARY KEY (id)
);
```
- It is a column that uniquely identifies each row. it is only 1 and should not be null.
##### Foreign Key : Prevent actions that would destroy link between tables
```
CREATE TABLE client(
	customer_id INT,
	FOREIGN KEY (customer_id) REFERENCES customer (id)
);
```

- FKs can have duplicate and null values
- There can be multiple FKs.
 - Here client and customer are two tables & id column of customer table is the foreign key of client table. (foreign key is the "customer_id" in client table.

### General Order of Writing SQL commands

```
SELECT columns
FROM table_name
WHERE condition
GROUP BY columns
HAVING condition
ORDER BY columns DESC;
```

- `ORDER BY` will provide ascending order by default, for descending order we have to mention it `DESC` 
- In normal case for applying condition we use `WHERE` but if we are using `GROUP BY` , in that case we have to use `HAVING` condition
- The `HAVING` condition will be applied to only the `GROUP BY` statement.

### Safe Mode

- By default the safe mode is on in the MySQL.
- To update inside the database we need to Turn off the SafeMode.
- There is a command to turn off the safe mode.
```
SET SQL_SAFE_UPDATES=0;
```
- To Turn it on, Make the number 1 :
```
SET SQL_SAFE_UPDATES=1;
```

### SQL vs NoSQL

- SQL is a relational database that means in this database data stored in tables. And tables ae relatable to each other you can say there are relations between the tables. ex- mysql, PostgreSQL, Oracle.
- Non relational Database (data stored in document/key-value pair/graphs etc). ex- MongoDB, Cassandra, Neo4j etc.

