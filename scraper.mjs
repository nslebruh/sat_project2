import {JSDOM} from "jsdom"
import * as fs from "fs"

(async () => {
  const result = [];
  const response = await fetch("https://threadcolors.com/");
  const text = await response.text();
  const dom = await new JSDOM(text);
  const rows = dom.window.document.querySelectorAll("tr");
  rows.forEach((row) => {
    let result_object = {};
    //console.log(`Floss: ${row.children.item(1).textContent}`);
    result_object["floss"] = row.children.item(1).textContent;
    //console.log(`Name: ${row.children.item(2).textContent}`);
    result_object["name"] = row.children.item(2).textContent;
    //console.log(`Red: ${row.children.item(3).textContent}`);
    result_object["red"] = row.children.item(3).textContent;
    //console.log(`Green: ${row.children.item(4).textContent}`)
    result_object["green"] = row.children.item(4).textContent;
    //console.log(`Blue: ${row.children.item(5).textContent}`);
    result_object["blue"] = row.children.item(5).textContent;
    //console.log(`Hex: ${row.children.item(6).textContent}`);
    result_object["hex"] = row.children.item(6).textContent;
    result_object["color"] = `#${row.children.item(6).textContent}`
    result_object["amount"] = 0;
    result_object["has"] = false;
    result.push(result_object)
  });
  console.log(result)
  fs.writeFileSync("test.json", `{"result": ${JSON.stringify(result)}}`)
})()