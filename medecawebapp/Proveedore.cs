//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MEDECAWebApp
{
    using System;
    using System.Collections.Generic;
    
    public partial class Proveedore
    {
        public Proveedore()
        {
            this.InsumosProveedores = new HashSet<InsumosProveedore>();
        }
    
        public int IdProveedor { get; set; }
        public string Nombre { get; set; }
        public string RNC { get; set; }
        public bool Activo { get; set; }
        public string Telefono { get; set; }
    
        public virtual ICollection<InsumosProveedore> InsumosProveedores { get; set; }
    }
}
