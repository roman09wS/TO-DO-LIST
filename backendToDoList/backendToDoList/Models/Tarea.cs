using System.Globalization;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace backendToDoList.Models
{
    public class Tarea
    {
        // [Column("id_tarea")] especifica el nombre de la columna en DB
        public int Id { get; set; }

        [Required(ErrorMessage = "El nombre es requerido.")]
        [Column(TypeName ="varchar(100)")]
        public required string Nombre { get; set; }


        [Required(ErrorMessage ="El estado es requerido.")]
        public bool Estado { get; set; }
    }
}
