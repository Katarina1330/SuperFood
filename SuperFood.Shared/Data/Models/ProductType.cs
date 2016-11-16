using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace SuperFood.Shared.Data.Models
{

    [Table("ProductType")]
    public partial class ProductType
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ProductType()
        {
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }

        [StringLength(255)]
        public string Name { get; set; }

        [StringLength(4000)]
        public string Description { get; set; }

        public string Identifier { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Product> Products { get; set; }
    }
}
