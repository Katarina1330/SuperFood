using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SuperFood.Shared.Data.Models
{

    [Table("Order")]
    public partial class Order
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Order()
        {
            OrderProducts = new HashSet<OrderProduct>();
        }

        public int Id { get; set; }

        [StringLength(128)]
        public string UserId { get; set; }

        public decimal Price { get; set; }

        public DateTimeOffset Date { get; set; }

        public bool IsNotified { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OrderProduct> OrderProducts { get; set; }
    }
}
