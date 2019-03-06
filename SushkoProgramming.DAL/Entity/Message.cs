using System;
using System.Collections.Generic;
using System.Text;

namespace SushkoProgramming.DAL.Entity
{
    public class Message
    {
        public int Id { get; set; }
        public string Data { get; set; }
        public bool IsNew { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
