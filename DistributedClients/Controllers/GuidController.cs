using Microsoft.AspNetCore.Mvc;
using System;

namespace DistributedClients.Controllers
{
    public class GuidController : Controller
    {
        public Guid GetGuid()
        {
            return Guid.NewGuid();
        }
    }
}
