using System.ComponentModel.DataAnnotations;

namespace backendCherryPicker.Entities
{
    public class Date
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public required string Title { get; set; }   
    }
}
