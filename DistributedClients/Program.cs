using Microsoft.AspNetCore.Hosting;
using System;
using System.IO;

namespace DistributedClients
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Started Distributed Clents");

            var host = new WebHostBuilder()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseKestrel()
                .UseStartup<Startup>()
                .UseUrls("http://0.0.0.0:5000")
                .Build();

            host.Run();
        }
    }
}