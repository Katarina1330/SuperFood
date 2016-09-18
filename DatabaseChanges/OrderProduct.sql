CREATE TABLE OrderProduct (
  ProductId int NOT NULL,
  OrderId int NOT NULL,
  FOREIGN KEY (ProductId) REFERENCES Product (Id),
  FOREIGN KEY (OrderId) REFERENCES [Order] (Id)
);