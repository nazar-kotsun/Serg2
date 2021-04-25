using System.Linq;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SergoChat.Controllers
{
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly SergoChatContext _context;
        
        public UserController(SergoChatContext context)
        {
            _context = context;
        }
        
        [HttpPost]
        public ActionResult AddUser([FromBody] User user)
        {
            if (user != null)
            {
                _context.Set<User>().Add(user);
                _context.SaveChanges();
                return Ok(user);
            }

            return BadRequest("Something went wrong");
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult> GetUser(int id)
        {
            return Ok(await _context.Set<User>().FirstOrDefaultAsync(user => user.Id == id));
        }
    }
}