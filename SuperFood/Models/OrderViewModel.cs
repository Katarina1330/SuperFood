using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SuperFood.Models
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public decimal Price { get; set; }
        public DateTimeOffset Date { get; set; }
        public bool IsNotified { get; set; }
    }
}