using SuperFood.Models;
using SuperFood.Shared.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SuperFood.Extensions
{
    public static class EntityConverter
    {

        public static ProductViewModel ToViewModel(this Product product)
        {
            return  new ProductViewModel
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Details = product.Details?.Split(';'),
                InStock = product.InStock,
                IsDeleted = product.IsDeleted,
                Price = product.Price,
                Topings = product.Topings?.Split(';'),
                Image = product.Image,
                ProductType = new ProductTypeViewModel
                {
                    Id = product.ProductTypeId ?? 0,
                    Name = product.ProductType?.Name
                }
            };
        }

        public static OrderViewModel ToViewModel(this Order order)
        {
            return new OrderViewModel
            {
                Id = order.Id,
                UserId = order.UserId,
                Price = order.Price,
                Date = order.Date,
                IsNotified = order.IsNotified
            };
        }
    }
}