using Microsoft.AspNetCore.Mvc;
using Amber-Sun-Web.Domain.Catalog;

namespace Amber-Sun-Web.Api.Controllers;

[ApiController]
[Route("catalog")]
public class CatalogController : ControllerBase
{
    private static readonly List<Item> Items = new()
    {
        new Item("Shirt, "Ohio State shirt.", "Nike", 29.99m),
        new Item("Shorts", "Ohio State shorts.", "Nike", 44.99m),
        ),
    };

    [HttpGet]
    public IActionResult GetItems()
    {
        return Ok(Items);
    }
}
{httpDelete("{id:int}")]
public IActionResult DeleteItem(int id)
{
    return NoContent();
}
