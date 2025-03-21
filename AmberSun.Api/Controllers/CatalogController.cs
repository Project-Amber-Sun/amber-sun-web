using Microsoft.AspNetCore.Mvc;
using AmberSun.Api.Domain.Catalog;

namespace AmberSun.Api.Controllers;

[ApiController]
[Route("catalog")]
public class CatalogController : ControllerBase
{
    private static readonly List<Item> Items = new()
    {
        new Item("Shirt", "Ohio State shirt.", "Nike", 29.99m),
        new Item("Shorts", "Ohio State shorts.", "Nike", 44.99m)
,
    };

    [HttpGet]
    public IActionResult GetItems()
    {
        return Ok(Items);
    }
   
    [HttpGet("{id:int}")]
    public IActionResult GetItem(int id)
    {
        var item = new Item("Shirt", "Ohio State shirt.", "Nike", 29.99m);
        item.Id = id;

    return Ok(item);
    }   

    [HttpPost ("{id:int}/ratings")]
    public IActionResult PostRating(int id, [FromBody] Rating rating)
    {
        var item = new Item("Shirt", "Ohio State shirt.", "Nike", 29.99m);
        item.Id = id;
         item.Ratings.Add(rating);
     return Ok();
    }
    
    [HttpPut("{id:int}")]
    public IActionResult Put(int id, Item item)
    {
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public IActionResult Delete(int id)
    {
        return NoContent();
    }
}

