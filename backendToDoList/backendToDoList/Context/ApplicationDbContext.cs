using backendToDoList.Models;
using Microsoft.EntityFrameworkCore;

namespace backendToDoList.Context
{
                                        //DbContext es la clase que nos permite crear una sesion con la base
                                        // de datos
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options ):base(options)
        {
            
        }

        public DbSet<Tarea> Tareas { get; set; }
    }
}
