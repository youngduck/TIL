CREATE TABLE COM_STD_YD_USER(
    user_id VARCHAR(30) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) not null,
    provider varchar(10) not null,
    role varchar(10) not null
)

CREATE TABLE COM_STD_YD_CERTIFICATION(
    user_id VARCHAR(30) PRIMARY KEY,
    email VARCHAR(255) not null,
    certification_number varchar(4) not null
)