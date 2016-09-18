CREATE TABLE [Order] 
(
  Id int NOT NULL IDENTITY (1, 1) PRIMARY KEY,
  UserId nvarchar(128) NOT NULL,
  Price decimal,
  Date datetimeoffset,
  IsNotified bit,
  FOREIGN KEY (UserId) REFERENCES AspNetUsers (Id)
)