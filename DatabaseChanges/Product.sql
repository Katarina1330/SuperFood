CREATE TABLE Product (
  Id int NOT NULL IDENTITY (1, 1) PRIMARY KEY,
  Name nvarchar(255) NOT NULL,
  Details nvarchar(max),
  Description nvarchar(max),
  Price decimal,
  InStock bit,
  ProductTypeId int NOT NULL,
  FOREIGN KEY (ProductTypeId) REFERENCES ProductType (Id)
);