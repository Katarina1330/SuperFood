ALTER TABLE [dbo].[ProductType] ADD [Description] nvarchar(4000) NULL

ALTER TABLE [dbo].[Product] ADD IsDeleted bit DEFAULT 0