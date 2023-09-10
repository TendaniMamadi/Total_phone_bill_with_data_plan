-- Price plans table
CREATE TABLE price_plans (
    id serial PRIMARY KEY,
    plan_name VARCHAR(255),
    sms_price FLOAT,
    call_price FLOAT
);


-- user table
CREATE TABLE users(
    usernames VARCHAR(255),
    plan_id int, 
    FOREIGN KEY (plan_id) REFERENCES price_plans(id)
);

