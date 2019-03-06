using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SushkoProgramming.DAL.Database;
using SushkoProgramming.WEB.Models;

namespace SushkoProgramming.WEB.Controllers {
    [Produces ("application/json")]
    [Route ("api/Message")]
    public class MessageController : Controller {
        private readonly Context db;

        public MessageController (Context db) {
            this.db = db;
        }

        [HttpGet ("[action]")]
        public JsonResult GetNew (string user) {
            var data = this.db.Messages.Where (t => t.IsNew && t.CreatedBy != user).ToList ();
            data.ForEach (t => t.IsNew = false);
            db.UpdateRange (data);
            db.SaveChanges ();
            return Json (data.Select (t => new MessageModel () {
                Data = t.Data,
                    User = t.CreatedBy
            }));
        }

        [HttpPost ("[action]")]
        public JsonResult Save ([FromBody] MessageModel message) {
            db.Messages.Add (new DAL.Entity.Message () {
                CreatedBy = message.User,
                    CreatedDate = DateTime.Now,
                    Data = message.Data,
                    IsNew = true
            });
            var result = db.SaveChanges ();
            return Json (new { Success = result > 0 });
        }
    }
}