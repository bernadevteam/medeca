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
    
    public partial class Cliente
    {
        public Cliente()
        {
            this.Vehiculos = new HashSet<Vehiculo>();
        }
    
        public int IDCliente { get; set; }
        public string Identificacion { get; set; }
        public string TipoIdentificacion { get; set; }
        public string Direccion { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Nombre { get; set; }
        public Nullable<bool> Favorito { get; set; }
    
        public virtual ICollection<Vehiculo> Vehiculos { get; set; }
    }
}
