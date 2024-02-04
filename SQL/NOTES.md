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

